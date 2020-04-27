import { Component, OnInit } from '@angular/core';
import { TodoService } from '../app/services/todo.service'

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  items: string[] = [];
  todoCurrent: string;

  

  constructor(public todo_service: TodoService){}
  ngOnInit(){
    this.getItems();
    this.todoCurrent = '';
  }


  addItem(item){

    this.todo_service.addItem(item);
  }

  removeItem(item){
    this.todo_service.removeItem(item);
  }
  

  getItems() {
    this.items = this.todo_service.getItems();
  }
  

  



  
}



