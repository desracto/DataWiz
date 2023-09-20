from app.blueprints.animation.sql2ra import *
import sqlparse
from pyparsing import ParseException

if __name__ == "__main__":
    try:
        print(translate("SEEEE"))
    except ParseException as pe:
        print(pe.explain())
    
