from flask import Flask
from config import Config
from .extensions import db, migrate, server_session

app = Flask(__name__)
app.config.from_object(Config)

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db, app.config["MIGRATION_DIR"])
    server_session.init_app(app)

    # User Blueprint
    from .blueprints.user import user_bp
    app.register_blueprint(user_bp, url_prefix="/api/")

    # Auth Blueprint
    from .blueprints.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth/')

    # Animation Blueprint
    from .blueprints.animation import animation_bp 
    app.register_blueprint(animation_bp, url_prefix="/api/animation/")

    return app

from app import models
