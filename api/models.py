from api import db

# Naming Scheme:

# Table Names: SchemaX_TableName
# Field Names: tablename_FieldName

class Object:
    def as_dict(self):
        return {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}

class Schema1_Employee(db.Model, Object):
    # Table Name
    __tablename__ = 'Employee'

    # Fields
    employee_ID = db.Column(db.Integer, primary_key=True)
    employee_FirstName = db.Column(db.String(50))
    employee_LastName = db.Column(db.String(50))
    employee_Age = db.Column(db.Integer)
    employee_Dept = db.Column(db.String(50))
    employee_Salary = db.Column(db.Integer)

    def __repr__(self):
        return "<Schema 1: Employee(ID: {})>".format(self.employee_ID)
    
