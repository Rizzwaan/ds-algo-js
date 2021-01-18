class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    # print items oflinkedlist
    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    # time complexity O(1)
    # Add at the beginning of the list
    def prepend(self, data):
        newNode = Node(data)
        newNode.next = self.head
        self.head = newNode

    # Add at nth position of the list
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

    # Add at end of the list
    def inser_at_end(self, data):
        newNode = Node(data)
        if self.head == None:
            self.head = newNode
            return

        last = self.head
        while last.next:
            last = last.next
        last.next = newNode

    # delete at a given position
    def delete_at_postion(self, n):
        temp = self.head
        if n == 1:
            self.head = temp.next

        for i in range(1, n - 1):
            temp = temp.next

        node_to_delete = temp.next

        temp.next = node_to_delete.next

    # reverse a linked list iterative approach
    def reverse_iterative(self):
        prev_node = None
        next_node = None
        current_node = self.head

        while current_node:
            next_node = current_node.next
            current_node.next = prev_node
            prev_node = current_node
            current_node = next_node

        self.head = prev_node

    # Print linked list recursive
    def print_linkedlist_recursive(self, head):
        if head is None:
            return

        print(head.data)
        self.print_linkedlist_recursive(head.next)

    # print linkedlist reverse reursive

    def print_linkedlist_recursive_reverse(self, head):
        if head == None:
            return

        self.print_linkedlist_recursive_reverse(head.next)
        print(head.data)


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

    #  insert at end
    llist.inser_at_end(12)
    llist.inser_at_end(13)
    llist.inser_at_end(18)

    # delete
    # llist.delete_at_postion(1)
    # llist.delete_at_postion(1)
    # llist.delete_at_postion(2)
    llist.delete_at_postion(4)

    # reverse iterative approach

    # llist.print_list()
    # print("-----------------------")
    # llist.reverse_iterative()
    # print("-----------------------")
    # llist.print_list()

    # llist.print_list()

    # print linkde list recursive
    llist.print_linkedlist_recursive(llist.head)

    # print linked list reverse recursive

    llist.print_linkedlist_recursive_reverse(llist.head)