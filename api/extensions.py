from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

from flask_migrate import Migrate
migrate = Migrate()

from flask_bcrypt import Bcrypt
"""
    This extension allows for password encryption
"""
bcrypt = Bcrypt()

from flask_session import Session
"""
    Enables server side session
"""
server_session = Session()
