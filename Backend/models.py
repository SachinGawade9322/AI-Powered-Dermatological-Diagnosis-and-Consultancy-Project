from sqlalchemy import Column, Integer, String, DateTime, Boolean, func
from datetime import datetime
from database import Base, engine
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class User(Base):
    __tablename__ = "users" 

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    phone = Column(String(15), nullable=False)
    password = Column(String(255), nullable=False)

    is_verified = Column(Boolean, default=False)
    verification_token = Column(String(255), nullable=True)

    failed_attempts = Column(Integer, default=0)
    lock_time = Column(DateTime, nullable=True)

    reset_token = Column(String(255), nullable=True)
    reset_token_expiry = Column(DateTime, nullable=True)

    created_at = Column(DateTime, server_default=func.now())

    def __init__(self, name, email, phone, password, is_verified=False, verification_token=None,
                 failed_attempts=0, lock_time=None, reset_token=None, reset_token_expiry=None):
        self.name = name
        self.email = email
        self.phone = phone
        self.password = password
        self.is_verified = is_verified
        self.verification_token = verification_token
        self.failed_attempts = failed_attempts
        self.lock_time = lock_time
        self.reset_token = reset_token
        self.reset_token_expiry = reset_token_expiry

Base.metadata.create_all(bind=engine)
