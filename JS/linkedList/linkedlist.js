class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  /* Print the linked list */
  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  /* add node in the beginning */
  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  /* Insert a node at a given position */
  insertAtNthPositon(data, n) {
    let newNode = new Node(data);
    if (n == 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let temp = this.head;
    for (let i = 1; i < n - 1; i++) {
      //   console.log(temp.data);
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }
  /* add node at the end of linked list */
  append(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let last = this.head;

    while (last.next) {
      last = last.next;
    }
    last.next = newNode;
  }
  /* delete a node at a given position */
  deleteAtPosition(n) {
    let temp = this.head;
    if (n === 1) {
      this.head = temp.next;
    }
    for (let i = 1; i < n - 1; i++) {
      temp = temp.next;
    }
    let nodeToDelete = temp.next;
    temp.next = nodeToDelete.next;
  }
  /* Reverse a linked list Iterative */
  reverseIterative() {
    let prevNode = null;
    let nextNode;
    let currentNode = this.head;
    while (currentNode !== null) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }
}

const llist = new LinkedList();
// prepend
llist.prepend(10);
llist.prepend(20);
llist.prepend(14);

// insert at nth positions
llist.insertAtNthPositon(3, 1);
llist.insertAtNthPositon(2, 2);
llist.insertAtNthPositon(1, 3);
llist.insertAtNthPositon(11, 3);

//append
llist.append(50);
llist.append(60);
llist.append(70);

// delete at position n

llist.deleteAtPosition(1);
llist.deleteAtPosition(1);
llist.deleteAtPosition(3);
llist.deleteAtPosition(3);

// reverse a linked list iterative
llist.printList();
console.log("----------------");
llist.reverseIterative();
console.log("----------------");
llist.printList();
