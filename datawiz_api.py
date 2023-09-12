from app import app, db, create_app
from app.blueprints.animation.generator import generate_prefixed, retrieve_schema

app = create_app()

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 
            "generate_prefixed": generate_prefixed
            }