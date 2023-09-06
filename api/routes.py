from api import app
from generator import generate_prefixed
from api.models import Schema1_Employee as Employee
from flask import jsonify

@app.route('/animation/fetch_schema/<int:schema_id>')
def fetch_schema(schema_id):

    # Incorrect schema ID
    if schema_id <= 0 or schema_id > 4:
        return 404
    
    # Prefixed database not generated
    if len(Employee.query.all()) == 0:
        generate_prefixed()

    if schema_id == 1:
        employees = Employee.query.all()
        result = []
        for emp in employees:
            result.append(emp.as_dict())
        
        return jsonify(result=result)