from flask import Flask
from config import Config
from .extensions import db, migrate, bcrypt, server_session

app = Flask(__name__)
app.config.from_object(Config)

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    server_session.init_app(app)

    # Auth Blueprint
    from api.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/auth/")

    # Animation Blueprint
    from api.animation import animation_bp 
    app.register_blueprint(animation_bp, url_prefix="/animation/")

    return app

from api import models
