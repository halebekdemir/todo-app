import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemType = {
    todo: 'todo',
    inProgress: 'inProgress',
    completed: 'completed'
  }
  
  todoArray:string[] = [];

  inProgressArray:string[] = [
    "Lorem Ipsum is simply dummy text"
  ];
  completedArray:string[] = [];

  newTodo:any;
  newInProgress:any;
  newComleted:any;

  deletedIndex:any;

  addTodo(value:string) {
    this.todoArray.push(value);
  }

  addDoing(value:string) {
    this.inProgressArray.push(value);
  }

  addCompleted(value:string) {
    this.completedArray.push(value);
  }

  changeTodoItem(value:{processType:string,itemType:string,index:number}) {
    console.log("change",value);
    switch(value.processType) {
      case 'moveTodo':
        if(value.itemType == 'inProgress') {
          this.todoArray.push(this.inProgressArray[value.index]);
          this.inProgressArray.splice(value.index,1);
        }
        else if(value.itemType == 'completed') {
          this.todoArray.push(this.completedArray[value.index]);
          this.completedArray.splice(value.index,1);
        }
        break;
      case 'moveInProgress':
        if(value.itemType == 'todo') {
          this.inProgressArray.push(this.todoArray[value.index]);
          this.todoArray.splice(value.index,1);
        }
        else if(value.itemType == 'completed') {
          this.inProgressArray.push(this.completedArray[value.index]);
          this.completedArray.splice(value.index,1);
        }
        break;
      case 'moveCompleted':
        if(value.itemType == 'todo') {
          this.completedArray.push(this.todoArray[value.index]);
          this.todoArray.splice(value.index,1);
        }
        else if(value.itemType == 'inProgress') {
          this.inProgressArray.push(this.inProgressArray[value.index]);
          this.inProgressArray.splice(value.index,1);
        }
        break;
      case 'deleteItem':
        if(value.itemType == 'todo') {
          this.todoArray.splice(value.index,1);
        }
        else if(value.itemType == 'inProgress') {
          this.inProgressArray.splice(value.index,1);
        }
        else if(value.itemType == 'completed') {
          this.completedArray.splice(value.index,1);
        }
        break;
      default:
        // code block
    }
  }

  deleteDoingItem(value:{index:number,itemType:string,processType:string}) {
    console.log("completed",value)
    /* this.inProgressArray.splice(value, 1); */
  }

  deleteCompletedItem(value:{index:number,itemType:string,processType:string}) {
    /* this.completedArray.splice(value, 1); */
  }
}
