import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  items: object[];
  todoCurrent: string;
  
  ngOnInit(){
    this.items = [];
    this.todoCurrent = '';
  }

  title = 'todo-app';

  addItem(item){
    this.items.push(item);
  }

  removeItem(item){
    const index: number = this.items.indexOf(item);
    if(index !== -1){
      this.items.splice(index, 1);
    }
  }

  
}



