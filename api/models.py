from api import db

# Naming Scheme:

# Table Names: SchemaX_TableName
# Field Names: tablename_FieldName

class Object:
    def as_dict(self):
        return {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}

#Schema 1
class Schema1_Employee(db.Model, Object):
    # Table Name and Bind
    __tablename__ = "Employee"

    # Fields
    employee_ID = db.Column(db.Integer, primary_key=True)
    employee_FirstName = db.Column(db.String(50))
    employee_LastName = db.Column(db.String(50))
    employee_Age = db.Column(db.Integer)
    employee_Dept = db.Column(db.String(50))
    employee_Salary = db.Column(db.Integer)

    def __repr__(self):
        return "<Schema 1: Employee(ID: {})>".format(self.employee_ID)
    
# Schema 2
class Schema2_Products(db.Model, Object):
    # Table name and Bind
    __tablename__ = "Products"
    
    # Fields
    products_ID = db.Column(db.Integer, primary_key=True)
    products_Name = db.Column(db.String(50))
    products_Category = db.Column(db.String(50))
    products_Price = db.Column(db.Integer)

    # Relationship
    inventory = db.relationship('Schema2_Inventory', backref='products_Stock')
    
    def __repr__(self):
        return "<Schema 1: Products(ID: {})>".format(self.products_ID)

class Schema2_Inventory(db.Model, Object):
    # Table Name
    __tablename__ = "Inventory"

    # Field Names
    inventory_ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    inventory_Quantity = db.Column(db.Integer)
    products_ProductID = db.Column(db.Integer, db.ForeignKey('Products.products_ID'))

    def __repr__(self):
        return "<Schema 2: Inventory(ID: {})>".format(self.inventory_ID)

