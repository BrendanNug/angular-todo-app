import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  //items: string[] = ["hi", "bye"];
  items: object[];
  todoCurrent: string;
  constructor(){

  }
  ngOnInit(){
    this.items = [];
    this.todoCurrent = '';
  }

  title = 'todo-app';

  addItem(item){
    this.items.push(item);
  }

  getItems(){
    return this.items;
  }
  removeItem(item){
    const index: number = this.items.indexOf(item);
    if(index !== -1){
      this.items.splice(index, 1);
    }
  }

  
}



