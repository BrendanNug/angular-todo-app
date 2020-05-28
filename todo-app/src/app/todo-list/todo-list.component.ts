import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: Array<any>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAll().subscribe(data => {
      this.items = data;
    });
  }

}
