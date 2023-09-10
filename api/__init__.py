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

    # Animation Blueprint
    from api.animation import animation_bp 
    app.register_blueprint(animation_bp)

    # Quiz Blueprint

    return app

from api import models