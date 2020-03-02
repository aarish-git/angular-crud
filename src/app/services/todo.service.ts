import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Todo} from './../Modules/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  constructor(private http:HttpClient) { }

  // Get Todos
  getTodos():Observable<Todo[]> {
   return this.http.get<Todo[]>(`${this.todoUrl}${this.todosLimit}`);
  }

  //Toggle Completed
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions)
  }
}
