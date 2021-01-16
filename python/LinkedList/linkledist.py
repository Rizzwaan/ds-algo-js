class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    # time complexity O(1)
    def prepend(self, data):
        newNode = Node(data)
        newNode.next = self.head
        self.head = newNode

    def insert_at_nth_pos(self, data, n):
        newNode = Node(data)
        if n == 1:
            newNode.next = self.head
            self.head = newNode
            return

        temp = self.head
        for i in range(1, n - 1):
            temp = temp.next

        newNode.next = temp.next
        temp.next = newNode

    def inser_at_end(self, data):
        newNode = Node(data)
        if self.head == None:
            self.head = newNode
            return

        last = self.head
        while last.next:
            last = last.next
        last.next = newNode


if __name__ == "__main__":
    llist = LinkedList()

    # llist.head = Node(10)
    # second = Node(4)
    # third = Node(56)

    # llist.head.next = second
    # second.next = third

    # prepend
    # llist.prepend(20)
    # llist.prepend(31)
    # llist.prepend(45)

    # insert at nth position
    llist.insert_at_nth_pos(4, 1)  # List: 4
    llist.insert_at_nth_pos(3, 1)  # List: 3 4
    llist.insert_at_nth_pos(5, 3)  # List  3, 4, 5
    llist.insert_at_nth_pos(6, 2)  # List  3, 6, 4, 5
    llist.inser_at_end(12)
    llist.inser_at_end(13)
    llist.inser_at_end(18)

    llist.print_list()
