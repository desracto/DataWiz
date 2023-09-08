from api.animation import animation_bp
from api.animation.generator import generate_prefixed
from flask import jsonify

from api.models import Schema1_Employee as Employee
from api.models import Schema2_Products as Products, Schema2_Inventory as Inventory
from api.models import Schema3_Courses as Courses, Schema3_CourseEnrollment as Course_Enrollment

@animation_bp.route('/animation/fetch_schema/<int:schema_id>')
def fetch_schema(schema_id):

    results = {}

    if schema_id == 1:
        # Prefixed database not generated
        if len(Employee.query.all()) == 0:
            generate_prefixed(1)
        
        employees = Employee.query.all()
        emps_dict = []
        for emp in employees:
            emps_dict.append(emp.as_dict())
        
        results = {
            "employees": emps_dict
        }
        
    elif schema_id == 2:
        # Prefixed database not generated
        if len(Products.query.all()) == 0 or len(Inventory.query.all()) == 0:
            generate_prefixed(2)

        products = Products.query.all()
        prods_arr = []
        for prod in products:
            prods_arr.append(prod.as_dict())
        
        invens = Inventory.query.all()
        invens_arr = []
        for inv in invens:
            invens_arr.append(inv.as_dict())

        results = {
            "products": prods_arr,
            "inventory": invens_arr
        }

    elif schema_id == 3:
        # Prefixed database not generated
        if len(Courses.query.all()) == 0 or len(Course_Enrollment.query.all()) == 0:
            generate_prefixed(3)

        courses = Courses.query.all()
        enrollments = Course_Enrollment.query.all()

        course_arr = []
        for course in courses:
            course_arr.append(course.as_dict())
        
        enrolls_arr = []
        for enroll in enrollments:
            enrolls_arr.append(enroll.as_dict())

        results = {
            'courses': course_arr,
            'enrollments': enrolls_arr
        }
    
    elif schema_id == 4:
        None

    else:
        return 404


    return jsonify(results=results)