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
  while(temp1->next!= NULL){
    temp1 = temp1->next;
  }
  temp1->next = temp;
  return head;
}
// print list using recursion
void PrintRecursive(struct Node* p){
  if(p== NULL){
    return;
  }
  printf("%d ",p->data);
  PrintRecursive(p->next);
}
// Print Reverse using recursion
void PrintReverseRecursive(struct Node *p){
   if(p == NULL){
    return;
  }
 
  PrintRecursive(p->next);
  printf("%d ",p->data);
}


int main() {
  //  structure is created as a local variable ;
  struct Node *head = NULL;
  head = Insert(head, 11);
  head = Insert(head, 16);
  head = Insert(head, 13);
  head = Insert(head, 5);
  head = Insert(head, 16);
  PrintReverseRecursive(head);
}