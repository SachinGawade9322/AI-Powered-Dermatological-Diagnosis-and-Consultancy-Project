from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_mail import Mail
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv
import os

from database import engine, Base
from config import Config
from routes.auth import auth_bp
from routes.user import user_bp

load_dotenv()

app = Flask(__name__)
app.config.from_object(Config)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
mail = Mail(app)
limiter = Limiter(key_func=get_remote_address)
limiter.init_app(app)  

with app.app_context():
    Base.metadata.create_all(bind=engine)

app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(user_bp, url_prefix="/user")

@app.route("/", methods=["GET"])
def home():
    return {"message": "Derma AI"}, 200

if __name__ == "__main__":
    app.run(debug=True)
