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
  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
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

llist.printList();
