import base64
import os
from datetime import datetime, timedelta
from uuid import uuid4
from werkzeug.security import generate_password_hash, check_password_hash

from .extensions import db
from .blueprints.animation import _prefixed_models

def get_uuid():
    return uuid4().hex

class User(db.Model):
    # Table name
    __tablename__ = 'User'

    # Fields
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    username = db.Column(db.String(40))
    email = db.Column(db.String(345), unique=True)
    password_hash = db.Column(db.Text, nullable=False)

    # Token Auth
    token = db.Column(db.String(32), index=True, unique=True)
    token_expiration = db.Column(db.DateTime)
    
    # Functions
    def __repr__(self):
        return "<User ID: {}>".format(self.id)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password=password)
    
    def to_dict(self):
        data = {
            "id": self.id,
            "username": self.username,
            "email": self.email  
        }

        return data
    
    def from_dict(self, data, new_user=False):
        for field in ['username', 'email', 'password']:
            if field in data:
                setattr(self, field, data[field])

        if new_user and 'password' in data:
            self.set_password(data['password'])

    def get_token(self, expires_in=3600):
        """
            Checks if there is an existing token with at least a minute left before expiration
            If there is, return the existing token

            If there is no token set or the token is expired:
            token generated as a random string encoded in base64

            token_expiration is calculated by taking the current time and finding the time
            at which the token will expire in
        """
        now = datetime.utcnow()
        if self.token and self.token_expiration > now + timedelta(seconds=60):
            return self.token
        self.token = base64.b64encode(os.urandom(24)).decode('utf-8')
        self.token_expiration = now + timedelta(seconds=expires_in)

        return self.token
    
    def revoke_token(self):
        """
            Revokes token by setting expiration date to one second before current time
        """
        self.token_expiration = datetime.utcnow() - timedelta(seconds=1)

    @staticmethod
    def check_token(token):
        """
            Retrieves user object based on token. If token invalid or expired, returns None
        """
        user:User = User.query.filter_by(token=token).first()
        if user is None or user.token_expiration < datetime.utcnow():
            return None
        return user