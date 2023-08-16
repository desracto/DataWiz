# import sqlparse

# # The formula to access parent node and it's leaves is:
# #       i: parent
# #    2i+1: left
# #    2i+2: right

# # To do:
# # Write down rules for converting sql query to relational algebra tree
# # Order of building tree from the bottom:
# # FROM
# # WHERE
# # JOIN
# # ORDER
# # 

# # SELECT

# class dataDictionary:
    

# class Node:
#     def __init__(self, keyword: str, value):
#         self.keyword = keyword
#         self.value = value

# class BinaryTree:
#     def __init__(self):
#         self.tree: list[Node] = []
    
#     def insertNode(self, node: Node):
#         """ 
#             This function takes a set of nodes and develops the tree based on Relational Algebra Tree rules
#         """
#         self.tree.append(node)
    
#     def printTree(self):
#         return ""
    

# if __name__ == "__main__":
#     sql_query = "SELECT * FROM customers WHERE id = 500"
#     print(sqlparse.parse(sql_query)[0][2])

    