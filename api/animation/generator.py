"""
    This file is used to populate the prefixed scehma databases

"""

from api import db

def generate_prefixed(id: int):
    """
        Function that reads the .txt file present in the schemas folder and generates the prefixed database out of it.
        The ID represent the schema to generate, 1-4. ID 5 Generates all.
    """
    # Schema 1
    if id == 1 or id == 5:
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

