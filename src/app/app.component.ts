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
  inProgressArray:string[] = [];
  completedArray:string[] = [];

  newTodo:any;
  newInProgress:any;
  newComleted:any;

  ngOnInit() {
    this.todoArray = JSON.parse(localStorage.getItem(this.itemType.todo) || '{}');
    this.inProgressArray = JSON.parse(localStorage.getItem(this.itemType.inProgress) || '{}');
    this.completedArray = JSON.parse(localStorage.getItem(this.itemType.completed) || '{}');
  }



  setStorage(arrayName:string,array:any) {
    localStorage.setItem(arrayName, JSON.stringify(array));
  }

  addTodo(value:string) {
    this.todoArray.push(value);
    this.setStorage(this.itemType.todo,this.todoArray)
  }

  deleteTodo(deletedIndex:number) {
    this.todoArray.splice(deletedIndex,1);
    this.setStorage(this.itemType.todo,this.todoArray)
  }

  addInProgress(value:string) {
    this.inProgressArray.push(value);
    this.setStorage(this.itemType.inProgress,this.inProgressArray)
  }

  deleteInProgress(deletedIndex:number) {
    this.inProgressArray.splice(deletedIndex,1);
    this.setStorage(this.itemType.inProgress,this.inProgressArray)
  }

  addCompleted(value:string) {
    this.completedArray.push(value);
    this.setStorage(this.itemType.completed,this.completedArray)
  }

  deleteCompleted(deletedIndex:number) {
    this.completedArray.splice(deletedIndex,1);
    this.setStorage(this.itemType.completed,this.completedArray)
  }

  changeTodoItem(value:{processType:string,itemType:string,index:number}) {
    console.log("change",value);
    switch(value.processType) {
      case 'moveTodo':
        if(value.itemType == this.itemType.inProgress) {
          this.addTodo(this.inProgressArray[value.index]);
          this.deleteInProgress(value.index);
        }
        else if(value.itemType == this.itemType.completed) {
          this.addTodo(this.completedArray[value.index]);
          this.deleteCompleted(value.index);
        }
        break;
      case 'moveInProgress':
        if(value.itemType == this.itemType.todo) {
          this.addInProgress(this.todoArray[value.index]);
          this.deleteTodo(value.index);
        }
        else if(value.itemType == this.itemType.completed) {
          this.addInProgress(this.completedArray[value.index]);
          this.deleteCompleted(value.index);
        }
        break;
      case 'moveCompleted':
        if(value.itemType == this.itemType.todo) {
          this.addCompleted(this.todoArray[value.index]);
          this.deleteTodo(value.index);
        }
        else if(value.itemType == this.itemType.inProgress) {
          this.addInProgress(this.inProgressArray[value.index]);
          this.deleteInProgress(value.index);
        }
        break;
      case 'deleteItem':
        if(value.itemType == this.itemType.todo) {
          this.deleteTodo(value.index);
        }
        else if(value.itemType == this.itemType.inProgress) {
          this.deleteInProgress(value.index);
        }
        else if(value.itemType == this.itemType.completed) {
          this.deleteCompleted(value.index);
        }
        break;
      default:
        // code block
    }
  }
}
