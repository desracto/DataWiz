from api.extensions import db
from datetime import datetime
from api.animation import _models

class Object:
    def as_dict(self):
        return {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
    
