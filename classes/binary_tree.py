# The formula to access parent node and it's leaves is:
#       i: parent
#     i*2: left
#   i*2+1: right

class Node:
    def __init__(self, value):
        self.value = value

class BinaryTree:
    def __init__(self):
        self.tree: list[Node] = []
    
    def insertNode(self, node: Node):
        self.tree.append(node)
    
    

    