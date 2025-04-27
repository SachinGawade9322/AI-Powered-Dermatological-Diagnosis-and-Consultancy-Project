from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import User
from database import SessionLocal

user_bp = Blueprint("user", __name__)

@user_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    user_id = get_jwt_identity()

    session = SessionLocal()
    user = session.query(User).get(user_id)

    if not user:
        session.close()
        return jsonify({"error": "User not found"}), 404

    user_data = {
        "name": user.name,  
        "email": user.email,
        "phone": user.phone,
        "failed_attempts": user.failed_attempts,
        "lock_time": user.lock_time,
        "created_at": user.created_at
    }

    session.close()
    return jsonify(user_data), 200
