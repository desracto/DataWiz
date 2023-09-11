from .extensions import db
from uuid import uuid4

from api.animation import _prefixed_models

def get_uuid():
    return uuid4().hex

class User(db.Model):
    # Table name
    __tablename__ = 'User'

    # Fields
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    email = db.Column(db.String(345), unique=True)
    password_hash = db.Column(db.Text, nullable=False)