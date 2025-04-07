import re
import secrets
from flask import Blueprint, request, jsonify
from models import User
from database import SessionLocal
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, JWTManager
from datetime import datetime, timedelta
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_mail import Mail, Message
from werkzeug.security import generate_password_hash, check_password_hash

auth_bp = Blueprint("auth", __name__)
bcrypt = Bcrypt()
jwt = JWTManager()
limiter = Limiter(get_remote_address)
mail = Mail()

# validate email format
def is_valid_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email)

# validate phone number
def is_valid_phone(phone):
    pattern = r"^\d{10}$"  
    return re.match(pattern, phone)

#validate password strength
def is_valid_password(password):
    pattern = r"^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    return re.match(pattern, password)

# email verificati on token
def generate_verification_token():
    return secrets.token_urlsafe(32)

@auth_bp.route("/register", methods=["POST"])
@limiter.limit("3 per minute")  
def register():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    if not is_valid_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    if not is_valid_phone(phone):
        return jsonify({"error": "Invalid phone number format"}), 400

    db = SessionLocal()
    existing_user = db.query(User).filter_by(email=email).first()
    
    if existing_user:
        db.close()
        return jsonify({"error": "Email already registered"}), 400

    if password != confirm_password:
        db.close()
        return jsonify({"error": "Passwords do not match"}), 400

    if not is_valid_password(password):
        db.close()
        return jsonify({"error": "Password must include one uppercase letter, one number, and one special character."}), 400

    verification_token = generate_verification_token()

    new_user = User(
        name=name,
        email=email,
        phone=phone,
        password=password, 
        is_verified=False,
        verification_token=verification_token,
    )

    db.add(new_user)
    db.commit()
    db.close()

    return jsonify({"message": "User registered. Please verify your email."}), 201

def send_verification_email(email, token):
    msg = Message(
        "Verify Your Email",
        sender="noreply@yourapp.com",
        recipients=[email]
    )
    msg.body = f"Use this token to verify your email: {token}"
    mail.send(msg)

@auth_bp.route("/verify-email/<token>", methods=["GET"])
def verify_email(token):
    db = SessionLocal()
    user = db.query(User).filter_by(verification_token=token).first()

    if not user:
        db.close()
        return jsonify({"error": "Invalid or expired token"}), 400

    user.is_verified = True
    user.verification_token = None
    db.commit()
    db.close()

    return jsonify({"message": "Email verified successfully"}), 200

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    db = SessionLocal()
    
    # Check email exists
    user = db.query(User).filter_by(email=data["email"]).first()
    if not user:
        print("User not found!")
        db.close()
        return jsonify({"error": "Invalid credentials"}), 401
    
    print(f"User found: {user.email}")
    print(f"Stored Password (Plain Text): {user.password}")
    print(f"Entered Password: {data['password']}")

# Check if account is locked
    if user.lock_time and datetime.utcnow() < user.lock_time:
        db.close()
        return jsonify({"error": "Account is temporarily locked. Try again later."}), 403

    if user.password == data["password"]:  
        print("Password matched!")
        user.failed_attempts = 0
        user.lock_time = None
        db.commit()
        db.close()
        return jsonify({"message": "Login successful"}), 200

    print("Password does not match!")

    user.failed_attempts += 1
    if user.failed_attempts >= 3:
        user.lock_time = datetime.utcnow() + timedelta(hours=24)
        print("🚨 Account locked due to too many failed attempts!")

    db.commit()
    db.close()
    return jsonify({"error": "Invalid credentials"}), 401

@auth_bp.route("/reset-password/<token>", methods=["POST"])
def reset_password(token):
    db = SessionLocal()
    user = db.query(User).filter_by(reset_token=token).first()

    if not user or user.reset_token_expiry < datetime.utcnow():
        db.close()
        return jsonify({"error": "Invalid or expired token"}), 400

    data = request.json
    new_password = data.get("password")

    if not is_valid_password(new_password):
        db.close()
        return jsonify({"error": "Password does not meet criteria"}), 400

    hashed_password = bcrypt.generate_password_hash(new_password).decode("utf-8")

    user.password = hashed_password
    user.reset_token = None
    user.reset_token_expiry = None
    db.commit()
    db.close()

    return jsonify({"message": "Password reset successfully!"}), 200

def send_reset_email(email, token):
    msg = Message(
        "Reset Your Password",
        sender="noreply@yourapp.com",
        recipients=[email]
    )
    msg.body = f"Use this token to reset your password: {token}"
    mail.send(msg)
