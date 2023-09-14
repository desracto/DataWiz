from flask import Flask
from config import Config
from .extensions import db, migrate, jwt

app = Flask(__name__)
app.config.from_object(Config)

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db, app.config["MIGRATION_DIR"])
    jwt.init_app(app)

    # Main blueprint
    from .blueprints.main import main_bp
    app.register_blueprint(main_bp)

    # Auth Blueprint
    from .blueprints.auth import auth_bp
    app.register_blueprint(auth_bp)

    # User Blueprint
    from .blueprints.user import user_bp
    app.register_blueprint(user_bp, url_prefix="/api/")

    # Animation Blueprint
    from .blueprints.animation import animation_bp 
    app.register_blueprint(animation_bp, url_prefix="/api/animation/")

    return app

from app import models
