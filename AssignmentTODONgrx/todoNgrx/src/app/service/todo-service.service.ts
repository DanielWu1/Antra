import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {


  constructor(private http: HttpClient) { }

  getTodo(){
    console.log('getTodo')
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
