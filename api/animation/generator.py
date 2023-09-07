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

    elif id == 2 or id == 5:
        from api.models import Schema2_Products as Products, Schema2_Inventory as Inventory
        
        # Products table
        # Clear existing data
        prods = Products.query.all()
        for p in prods:
            db.session.delete(p)

        with open("api\\animation\\schemas\\schema2.txt", "r") as file:
            for line in file:
                if line.find('PRODUCTS') != -1:
                    line = line.strip()
                    line = re.split(',|:', line)

                    prod = Products(products_ID=int(line[1]),
                                    products_Name=line[2],
                                    products_Category=line[3],
                                    products_Price=int(line[4])
                                    )
                    db.session.add(prod)

        db.session.commit()
        
        # Inventory table
        # Clear existing data
        invs = Inventory.query.all()
        for inv in invs:
            db.session.delete(inv)

        with open("api\\animation\\schemas\\schema2.txt", "r") as file:
            for line in file:
                if line.find('INVENTORY') != -1:
                    line = line.strip()
                    line = re.split(',|:', line)

                    inv = Inventory(products_ProductID=int(line[1]),
                                    inventory_Quantity=int(line[2])
                                    )
                    db.session.add(inv)
        
        db.session.commit()
        