#include <iostream>
struct Node {
  int data;
  struct Node* next;
};
struct Node* head; 
void Insert(int data, int n) {
  // struct Node* temp1 = (Node*)malloc(sizeof(struct Node));  
  Node* temp1 = new Node();
  temp1->data = data;
  temp1 -> next = NULL; 

  // When linkedlist is empty
  if(n==1) {
    temp1 -> next = head;
    head = temp1;
    return;
  }
  Node* temp2 = head;
  for (int i = 1; i< n-1; i++) {
    temp2 = temp2->next;
  }
  temp1->next = temp2 -> next;
  temp2 -> next = temp1;
};

void Print(){
  Node* temp = head;
  while(temp != NULL){
    printf("%d ", temp->data);
    temp = temp->next;
  }
  printf("\n");
}

int main() {
  head = NULL; // Empty List
  Insert(2, 1); // List : 2 
  Insert(3, 2);
  Insert(6, 3); // List: 2, 3
  Insert(4, 1); // List: 4, 2, 3
  Insert(5, 2);  // List: 4, 5, 2, 3
  Print();

}

// three ways  Inseat

// 1 create head as global variable
// 2 create as a local variable and pass the value and return

// 3 pass the refrence and returne void