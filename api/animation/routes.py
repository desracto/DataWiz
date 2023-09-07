from api.animation import animation_bp
from api.animation.generator import generate_prefixed
from flask import jsonify

from api.models import Schema1_Employee as Employee
from api.models import Schema2_Products as Products, Schema2_Inventory as Inventory

@animation_bp.route('/animation/fetch_schema/<int:schema_id>')
def fetch_schema(schema_id):

    # Incorrect schema ID
    if schema_id <= 0 or schema_id > 4:
        return 404
    
    if schema_id == 1:
        # Prefixed database not generated
        if len(Employee.query.all()) == 0:
            generate_prefixed(1)
        
        employees = Employee.query.all()
        result = []
        for emp in employees:
            result.append(emp.as_dict())
        
        return jsonify(result=result)
    if schema_id == 2:
        # Prefixed database not generated
        if len(Products.query.all()) == 0 or len(Inventory.query.all()) == 0:
            generate_prefixed(2)

        products = Products.query.all()
        prods_dict = []
        for prod in products:
            prods_dict.append(prod.as_dict())
        
        invens = Inventory.query.all()
        invens_dict = []
        for inv in invens:
            invens_dict.append(inv.as_dict())

        results = {
            "products": prods_dict,
            "inventory": invens_dict
        }

        return jsonify(results=results)