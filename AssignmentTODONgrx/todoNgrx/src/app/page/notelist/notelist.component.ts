import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { completeTodo, deleteTodo, loadTodos } from 'src/app/ngrx/todo.actions';
import { selectTodos } from 'src/app/ngrx/todo.selecter';
import { Todo } from 'src/app/service/todo';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {
  private todos$ = this.store.pipe(select(selectTodos));
  public todoList!: Todo[];

  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
    this.todos$.subscribe(x => this.todoList = x);
  }

  deleteTodo(id:number){
    this.store.dispatch(deleteTodo({id}));
  }

  completedli(id:number){
    this.store.dispatch(completeTodo({id}));
  }
}
