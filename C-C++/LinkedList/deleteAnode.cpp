#include <iostream>

struct Node{
  int data;
  struct Node* next; 
};
struct Node* head;
// Insert at end of linked list
void Insert(int data){
  Node* temp = (Node*)malloc(sizeof(struct Node));
  temp->data = data;
  temp->next = NULL;
  Node* temp1 = head;
  if( temp1 == NULL){
    head = temp;
    return;
  }
  while(temp1->next){
    temp1 = temp1->next;
  }
  temp1->next = temp;
}
void Print(){
  Node* temp = head;
  printf(" List is : ");
  while( temp != NULL){
    printf("%d ", temp->data);
    temp = temp->next;
  }
  printf("\n");
}
void Delete(int n){
  struct Node* temp = head;
  if(n==1){
    head =temp->next;
    free(temp);
    return;
  }
  int i;
  for( i =1; i< n-1; i++){
    //  error handling
    if(temp->next == NULL){
      printf("Out of range\n");
      return;
    }else {
      temp = temp->next;
    }
    
  }
  // error handling
  if(temp->next == NULL){
    printf("Out of range\n");
    return;
  }
  struct Node* temp1 = temp->next;
  temp->next = temp1->next;
  free(temp1);

};
int main() {
  Insert(11);
  Insert(16);
  Insert(13);
  Insert(5);
  Insert(16);
  Print();
  int n;
  printf("Enter a position\n");
  scanf("%d", &n);
  Delete(n);
  Print();
}