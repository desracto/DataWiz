from app.blueprints.animation.scripts.sql2ra import translate
from sqlparse import parse

def main():
    query = "SELECT EMP.ID, EMP.NAME FROM EMPLOYEES AS EMP WHERE EMP.ID=1"
    print(parse(query)[0][8][2][2])



if __name__ == '__main__':
    main()