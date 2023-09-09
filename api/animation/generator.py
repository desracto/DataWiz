"""
    This file is used to populate the prefixed scehma databases

"""

from api import db
import re
from datetime import datetime

def retrieve_schema(id: int):
    table_names = []
    if id == 1:
        table_names.append('EMPLOYEE')
    elif id == 2:
        table_names.append('PRODUCT')
        table_names.append('INVENTORY')
    elif id == 3:
        table_names.append('COURSE')
        table_names.append('ENROLLMENT')
    elif id == 4:
        table_names.append('FLIGHT')
        table_names.append('PASSENGER')
        table_names.append('TICKET')
    elif id == 5:
        table_names.append('ALBUM')
        table_names.append('ARTIST')
        table_names.append('SONG')
        table_names.append('GENRE')

    result = {}
    with open("api\\animation\\schemas\\schemas.txt", "r") as file:
        for line in file:
            if any(x in line for x in table_names):
                line = line.strip()
                line = re.split(',', line)

                if not result.get(line[0]):
                    result[line[0]] = []
                    
                result[line[0]].append(line[1::])
    
    return result

def generate_prefixed(id: int):
    result = retrieve_schema(id)

    if id == 1:
        from api.models import Schema1_Employee as Employee

        # Employee 
        for arr in result['EMPLOYEE']:
            obj = emp = Employee(employee_ID=arr[0], 
                                 employee_FirstName=arr[1], 
                                 employee_LastName=arr[2], 
                                 employee_Age=int(arr[3]), 
                                 employee_Dept=arr[4], 
                                 employee_Salary=int(arr[5]))
            db.session.add(obj)
        db.session.commit()

    elif id == 2:
        from api.models import Schema2_Product as Product, \
                               Schema2_Inventory as Inventory
        
        # Product Table
        for arr in result['PRODUCT']:
            prod = Product(products_ID=int(arr[1]),
                        products_Name=arr[2],
                        products_Category=arr[3],
                        products_Price=int(arr[4]))
            db.session.add(prod)
        
        # Inventory table
        for arr in result['INVENTORY']:
            inv = Inventory(products_ProductID=int(arr[1]),
                            inventory_Quantity=int(arr[2])) 

            db.session.add(inv)
        db.session.commit()

    elif id == 3:
        from api.models import Schema3_Course as Course, \
                               Schema3_Enrollment as Enrollment
        # Course 
        for arr in result['COURSE']:
            obj = Course(course_ID=arr[1],
                         course_Name=arr[2],
                         course_Credit=int(arr[3]),
                         course_Dept=arr[4])
            
            db.session.add(obj)
        
        # Inventory
        for arr in result['INVENTORY']:
            obj = Enrollment(enrollment_ID=int(arr[1]),
                                    enrollment_StudentID=int(arr[2]),
                                    enrollment_CourseID=arr[3],
                                    enrollment_Grade=arr[4])           
            db.session.add(obj)
        db.session.commit()

    elif id == 4:
        from api.models import Schema4_Flight as Flight, \
                               Schema4_Passenger as Passenger, \
                               Schema4_Ticket as Ticket 
        # Flight table
        for arr in result['FLIGHT']:
            obj = Flight(flight_ID = int(arr[0]),
                         flight_AirlineName = arr[1],
                         flight_DepartureCity = arr[2],
                         flight_ArrivalCity = arr[3],
                         flight_DepartureTime = datetime.strptime(arr[4], '%m/%d/%Y %H:%M'),
                         flight_ArrivalTime = datetime.strptime(arr[5], '%m/%d/%Y %H:%M'))

            db.session.add(obj)

        # Passenger Table
        for arr in result['PASSENGER']:
            obj = Passenger(passenger_ID = int(arr[0]),
                            passenger_FirstName = arr[1],
                            passenger_LastName = arr[2],
                            passenger_Gender = arr[3],
                            passenger_Age = arr[4])

            db.session.add(obj)

        # Ticket Table
        obj = Ticket()
        for arr in result['TICKET']:
            obj = Ticket(ticket_ID = int(arr[0]),
                            ticket_FlightID = int(arr[1]),
                            ticket_PassengerID = int(arr[2]),
                            ticket_SeatNumber = arr[3],
                            ticket_Price = float(arr[4]))
            db.session.add(obj)
        db.session.commit()

    elif id == 5:
        None
