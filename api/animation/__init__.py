from flask import Blueprint

animation_bp = Blueprint('animation', __name__)

from api.animation import routes