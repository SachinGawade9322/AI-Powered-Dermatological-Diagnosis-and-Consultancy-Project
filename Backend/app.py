# from flask import Flask
# from flask_bcrypt import Bcrypt
# from flask_jwt_extended import JWTManager
# from flask_mail import Mail
# from flask_limiter import Limiter
# from flask_limiter.util import get_remote_address
# from dotenv import load_dotenv
# import os

# from database import engine, Base
# from config import Config
# from routes.auth import auth_bp
# from routes.user import user_bp

# load_dotenv()

# app = Flask(__name__)
# app.config.from_object(Config)
# bcrypt = Bcrypt(app)
# jwt = JWTManager(app)
# mail = Mail(app)
# limiter = Limiter(key_func=get_remote_address)
# limiter.init_app(app)  

# with app.app_context():
#     Base.metadata.create_all(bind=engine)

# app.register_blueprint(auth_bp, url_prefix="/auth")
# app.register_blueprint(user_bp, url_prefix="/user")

# @app.route("/", methods=["GET"])
# def home():
#     return {"message": "Derma AI"}, 200

# if __name__ == "__main__":
#     app.run(debug=True)

# backend/app.py

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock database
channels = [
    {"id": 1, "name": "Skin Conditions"},
    {"id": 2, "name": "General Discussions"},
    {"id": 3, "name": "Treatment Advice"},
]

messages = []  # Messages store

# Get all channels
@app.route("/api/channels", methods=["GET"])
def get_channels():
    return jsonify(channels)

# Create a new channel
@app.route("/api/channels", methods=["POST"])
def create_channel():
    data = request.json
    new_channel = {
        "id": len(channels) + 1,
        "name": data.get("name")
    }
    channels.append(new_channel)
    return jsonify(new_channel), 201

# 🆕 DELETE a channel
@app.route("/api/channels/<int:channel_id>", methods=["DELETE"])
def delete_channel(channel_id):
    global channels, messages
    # Find if channel exists
    channel_to_delete = next((ch for ch in channels if ch["id"] == channel_id), None)
    if channel_to_delete:
        channels = [ch for ch in channels if ch["id"] != channel_id]
        # Also delete related messages
        messages = [msg for msg in messages if msg["channelId"] != channel_id]
        return jsonify({"message": "Channel deleted successfully."}), 200
    else:
        return jsonify({"error": "Channel not found."}), 404

# Send a message
@app.route("/api/messages", methods=["POST"])
def send_message():
    data = request.json
    message = {
        "channelId": data.get("channelId"),
        "user": data.get("user"),
        "content": data.get("content")
    }
    messages.append(message)
    return jsonify(message), 201

# Get messages for a specific channel
@app.route("/api/messages/<int:channel_id>", methods=["GET"])
def get_messages(channel_id):
    channel_messages = [msg for msg in messages if msg["channelId"] == channel_id]
    return jsonify(channel_messages)

if __name__ == "__main__":
    app.run(debug=True)
