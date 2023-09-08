"""
    This file is used to populate the prefixed scehma databases

"""

from api import db
import re

def generate_prefixed(id: int):
    """
        Function that reads the .txt file present in the schemas folder and generates the prefixed database out of it.
        The ID represent the schema to generate, 1-4. ID 5 Generates all.
    """
    # Schema 1
    if id == 1:
        from api.models import Schema1_Employee as Employee

        # Clear existing Data
        employees = Employee.query.all()
        for emp in employees:
            db.session.delete(emp)

        # Add new data
        with open("api\\animation\\schemas\\schema1.txt", 'r') as file:
            for line in file:
                line = line.split(',')
                emp = Employee(employee_ID=line[0], 
                            employee_FirstName=line[1], 
                            employee_LastName=line[2], 
                            employee_Age=int(line[3]), 
                            employee_Dept=line[4], 
                            employee_Salary=int(line[5])
                            )
                db.session.add(emp)
        db.session.commit()

    elif id == 2:
        from api.models import Schema2_Products as Products, Schema2_Inventory as Inventory
        
        # Clear existing data
        # Products table
        prods = Products.query.all()
        for p in prods:
            db.session.delete(p)

        # Inventory table
        invs = Inventory.query.all()
        for inv in invs:
            db.session.delete(inv)

        with open("api\\animation\\schemas\\schema3.txt", "r") as file:
            for line in file:
                if any(x in line for x in ['PRODUCTS', 'INVENTORY']):
                    line = line.strip()
                    line = re.split(',|:', line)

                    if 'PRODUCTS' in line:
                        prod = Products(products_ID=int(line[1]),
                                        products_Name=line[2],
                                        products_Category=line[3],
                                        products_Price=int(line[4]))
                    db.session.add(prod)

                    if 'INVENTORY' in line:
                        inv = Inventory(products_ProductID=int(line[1]),
                                        inventory_Quantity=int(line[2]))
                    db.session.add(inv)
        
        db.session.commit()
    
    elif id == 3:
        from api.models import Schema3_Courses as Courses, Schema3_CourseEnrollment as Course_Enrollment

        # Clear existing database
        # Courses
        courses = Courses.query.all()
        for course in courses:
            db.session.delete(course)

        # Course Enrollments
        course_enrolls = Course_Enrollment.query.all()
        for enroll in course_enrolls:
            db.session.delete(enroll)

        with open("api\\animation\\schemas\\schema3.txt", "r") as file:
            for line in file:
                if any(x in line for x in ['COURSES', 'ENROLLMENT']):
                    line = line.strip()
                    line = re.split(',|:', line)

                    if 'COURSES' in line:
                        obj = Courses(courses_ID=line[1],
                                    courses_Name=line[2],
                                    courses_Credit=int(line[3]),
                                    courses_Dept=line[4])
                        
                        db.session.add(obj)
                    elif 'ENROLLMENT' in line:
                        obj = Course_Enrollment(enrollment_ID=int(line[1]),
                                                enrollment_StudentID=int(line[2]),
                                                enrollment_CourseID=line[3],
                                                enrollment_Grade=line[4])
                        
                        db.session.add(obj)
            
            db.session.commit()


