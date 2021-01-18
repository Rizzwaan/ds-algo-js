#include <iostream>

struct Node{
  int data;
  struct Node* next; 
};
// Insert at end of linked list
Node* Insert(Node* head,int data){
  Node* temp = (Node*)malloc(sizeof(struct Node));
  temp->data = data;
  temp->next = NULL;
  Node* temp1 = head;
  if( temp1 == NULL){
    head = temp;
    return head;
  }
  while(temp1->next){
    temp1 = temp1->next;
  }
  temp1->next = temp;
  return head;
}
void Print(Node* head){
  struct Node *temp = head;
  printf(" List is : ");
  while( temp != NULL){
    printf("%d ", temp->data);
    temp = temp->next;
  }
  printf("\n");
}
// Iterative Approach
struct Node* Reverse(struct Node *head){
  // prev will be the last node
  // current will be node we want to point prev
  //  nextNode will keep the reference for the node add for further iteration by assign it to current  
  struct Node *prev, *current, *nextNode;
  prev = NULL;
  current = head;

  while(current != NULL){
    nextNode = current->next;
    current->next = prev;
    prev = current;
    current = nextNode;

  }
  // prev is at the end of the list accoring to our logic
  head = prev;
  return head;
}

int main() {
  //  structure is created as a local variable ;
  struct Node *head = NULL;
  head = Insert(head, 11);
  head = Insert(head, 16);
  head = Insert(head, 13);
  head = Insert(head, 5);
  head = Insert(head, 16);
  Print(head);
  head = Reverse(head);
  Print(head);
  
}