import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
    
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'main.db')
    
    SQLALCHEMY_BINDS = {
        "prefixed": "sqlite:///" + os.path.join(basedir, "prefixed_sc.db")
    }

    SQLALCHEMY_TRACK_MODIFICATIONS = False