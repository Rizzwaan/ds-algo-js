class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def printList(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    # time complexity O(1)
    def addBeginning(self, data):
        newNode = Node(data)
        newNode.next = self.head
        self.head = newNode


if __name__ == "__main__":
    llist = LinkedList()

    # llist.head = Node(10)
    # second = Node(4)
    # third = Node(56)

    # llist.head.next = second
    # second.next = third
    llist.addBeginning(20)
    llist.addBeginning(31)
    llist.addBeginning(45)
    llist.printList()
