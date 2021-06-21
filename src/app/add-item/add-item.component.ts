import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() addedItem = new EventEmitter<string>();

  newItem:any;

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value:string) {
    console.log("value",value);
    if(!(value === undefined || value === '')) {
      this.addedItem.emit(value);
    }
    this.newItem = '';
  }

}
