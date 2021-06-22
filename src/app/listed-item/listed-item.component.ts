import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listed-item',
  templateUrl: './listed-item.component.html',
  styleUrls: ['./listed-item.component.scss']
})
export class ListedItemComponent implements OnInit {
  @Input() listItems:string[] = [];
  @Input() itemType:string = '';
  @Output() changedItem = new EventEmitter<{processType:string,itemType:string,index:number}>();
  isAnyMenuOpen:boolean = false;
  optionType = {
    moveTodo: 'moveTodo',
    moveInProgress: 'moveInProgress',
    moveCompleted: 'moveCompleted',
    deleteItem: 'deleteItem'
  }

  constructor() { }

  ngOnInit(): void {
    console.log("list items",this.itemType)
  }

  openListMenu(itemType:string,index:number) {
    let listItems = document.querySelectorAll('[data-list]');
    for (let i = 0; i < listItems.length; i++) {
      const element = listItems[i];
      /** the element clicked first is checked */
      if(element.getAttribute('data-list') == `${itemType}-${index}`) {
        if(element.classList.contains('-open')) {
          element.classList.remove('-open')
        }
        else {
          element.classList.add('-open');
        }
      }
      /** -open class is removed from all other elements */
      else if(element.classList.contains('-open')) {
        element.classList.remove('-open')
      }
    }
  }

  changeItemStatus(processType:string,itemType:string,index:number) {
    this.changedItem.emit({processType,itemType,index});
  }

}
