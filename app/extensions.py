from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

from flask_migrate import Migrate
migrate = Migrate()

from flask_jwt_extended import JWTManager
jwt = JWTManager()

from flask_cors import CORS
cors = CORS()
