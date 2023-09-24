from flask import Flask
from config import Config
from .extensions import db, migrate, jwt, cors

app = Flask(__name__)
app.config.from_object(Config)

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db, app.config["MIGRATION_DIR"])
    jwt.init_app(app)
    cors.init_app(app, supports_credentials=True)
    
    # Main blueprint
    from .blueprints.main import main_bp
    app.register_blueprint(main_bp)

    # Auth Blueprint
    from .blueprints.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth/")

    # User Blueprint
    from .blueprints.user import user_bp
    app.register_blueprint(user_bp, url_prefix="/api/user/")

    # Animation Blueprint
    from .blueprints.animation import animation_bp 
    app.register_blueprint(animation_bp, url_prefix="/api/animation/")

    # Quiz Blueprint
    from .blueprints.quiz import quiz_bp
    app.register_blueprint(quiz_bp, url_prefix="/api/quiz/")

    return app

from app import models
