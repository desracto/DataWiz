from api import db


# All the prefixed schemas will exist as "one" schema with multiple tables and relationships
# Will need to lock down the tables to not allow any CRUD statements

# Schema 1 
class Schema1Employee(db.Model):
    # Table Name
    __tablename__ = 'Employee'

    # Fields
    employee_ID = db.Column(db.Integer, primary_key=True)
    employee_FirstName = db.Column(db.String(40))
    employee_LastName = db.Column(db.String(40))
    employee_Age = db.Column(db.Integer)
    employee_Dept = db.Column(db.String(60))
    employee_Salary = db.Column(db.Integer)

