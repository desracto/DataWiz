from flask import abort, jsonify
from api.animation import bp 

# Test Schema
schema_1 = [
    {
        "id": 1,
        "name": "ejazz",
        "dept": "it"
    },
    {
        "id": 2,
        "name": "hiba",
        "dept": "it"
    },
    {
        "id": 3,
        "name": "rida",
        "dept": "it"
    },
    {
        "id": 4,
        "name": "tehami",
        "dept": "it"
    },
    {
        "id": 5,
        "name": "nihal",
        "dept": "it"
    }
]

@bp.route('/animation/<int:schema_id>')
def retrieve_schema(schema_id: int):
    
    # Error Handling for incorrect schema ID
    if schema_id <= 0 or schema_id > 4:
        abort(404, description='Incorrect Schema ID')

    schema_data = None
    if schema_id == 1:
        # REPLACE with database logic to retrieve rows
        sc = schema_1

    
    return jsonify(results = sc)
    
    