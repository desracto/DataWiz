from app.blueprints.animation.sql2ra import *
import sqlparse

if __name__ == "__main__":
    
    sql_text = "SELECT PROD_ID FROM PRODUCTS, INVENTORY WHERE PRODUCTS.ID = INVENTORY.PRODUCT_ID"
    sqtree = translate(sqlparse.parse(sql_text)[0])

    print(sqtree)

    
