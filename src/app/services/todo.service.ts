import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService{

  items: string[] = [];


  addItem(item: string){
    this.items.push(item);
  }

  removeItem(item){
    const index: number = this.items.indexOf(item);
    if(index !== -1){
      this.items.splice(index, 1);
    }
  }
  getItems() {
    return (this.items);
  }
}
