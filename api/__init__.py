from flask import Flask
from config import Config
from .extensions import db, migrate

app = Flask(__name__)
app.config.from_object(Config)

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    # Main
    from api.main import main_bp
    app.register_blueprint(main_bp)

    # Animation Blueprint
    from api.animation import animation_bp 
    app.register_blueprint(animation_bp)

    # Quiz Blueprint
    from api.quiz import quiz_bp
    app.register_blueprint(quiz_bp)

    return app

from api import models