from .extensions import db

from uuid import uuid4
from werkzeug.security import generate_password_hash, check_password_hash

from .blueprints.animation import _prefixed_models

def get_uuid():
    return uuid4().hex

class User(db.Model):
    # Table name
    __tablename__ = 'User'

    # Fields
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345), unique=True)
    password_hash = db.Column(db.Text, nullable=False)

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
            "email": self.email    
        }

        return data
    
    def from_dict(self, data, new_user=False):
        for field in ['email', 'password']:
            if field in data:
                setattr(self, field, data[field])

        if new_user and 'password' in data:
            self.set_password(data['password'])