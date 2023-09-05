from flask import Blueprint

bp = Blueprint('animation', __name__)

from api.animation import routes