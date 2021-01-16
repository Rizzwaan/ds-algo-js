#include <iostream>
struct Node {
  int data;
  struct Node* next;
};
// struct Node* head;// global variable can be accesed ffrom any where
void Insert(Node** head, int x) {
  Node* temp = (Node*)malloc(sizeof(struct Node));
  temp -> data = x;
  temp -> next = *head;
  *head = temp;
};
void Print(Node* head){
  printf(" List is : ");
  while( head != NULL){
    printf("%d ", head->data);
    head = head -> next;
  }
  printf("\n");
};
int main() {
  struct Node* head = NULL; // empty list
  printf("How many Numbers?\n");
  int n, i, x;
  scanf("%d", &n);
  for(i = 0; i<n; i++){

    printf("Enter the number \n");
    scanf("%d", &x);
    Insert(&head, x);
    Print(head);
  }

}

// three ways  Inseat

// 1 create head as global variable
// 2 create as a local variable and pass the value and return

// 3 pass the refrence and returne void
