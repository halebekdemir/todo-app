import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ListedItemComponent } from './listed-item/listed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // for ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
