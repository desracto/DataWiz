from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

from flask_migrate import Migrate
migrate = Migrate()

from flask_session import Session
"""
    Enables server side session.
    By enabling this, session imported from flask will act as server session.

    All session details will be stored on the server and only the session id will be 
    stored in cookies on the client side. 

    The server configurations are detailed by:
    SESSION_TYPE
    SESSION_PERMANENT
    SESSION_USE_SIGNER
    SESSION_REDIS    

    present in config.py in the root directory
"""
server_session = Session()
