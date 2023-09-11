import os
import redis
from dotenv import load_dotenv
basedir = os.path.abspath(os.path.dirname(__file__))

load_dotenv()

class Config(object):
    SECRET_KEY = 'secret-key-PLEASE-CHANGE-BEFORE-PROD'

    # Flask-Migrate
    MIGRATION_DIR = os.path.join(basedir, 'api\\migrations')

    # SQLAlchemy
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'api\\db_files\\main.db')
    
    SQLALCHEMY_BINDS = {
        "prefixed": "sqlite:///" + os.path.join(basedir, "api\\db_files\\prefixed_sc.db")
    }
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_REDIS = redis.from_url("redis://127.0.0.1:6379")