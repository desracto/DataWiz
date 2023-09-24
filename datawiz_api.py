from app import app, db, create_app
from app.blueprints.animation.scripts.generator import generate_prefixed, retrieve_schema

from app.models import Users
from app.models import Quiz
app = create_app()

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 
            "generate_prefixed": generate_prefixed,

            # Models
            "User": Users,
            "Quiz": Quiz
            }