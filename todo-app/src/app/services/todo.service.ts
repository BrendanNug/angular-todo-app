import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService{

  public API = '//localhost:8080';
  public TODO_API = this.API + '/todos';

   constructor(private http: HttpClient) {
   }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/todo-items');
  }

  get(id: string) {
    return this.http.get(this.TODO_API + '/' + id);
  }

  save(item: any): Observable<any> {
    let result: Observable<any>;
    if (item.href) {
      result = this.http.put(item.href, item);
    } else {
      result = this.http.post(this.TODO_API, item);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
