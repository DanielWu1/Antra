import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TodoActions from './todo.actions';
import { TodoServiceService } from '../service/todo-service.service';

@Injectable()
export class TodoEffects {
    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodoActions.loadTodos),
            switchMap(() =>
                this.todoService.getTodo().pipe(
                    map((todos) => TodoActions.loadTodosSuccess({ todos })),
                    catchError((error) => of(TodoActions.loadTodosFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private todoService: TodoServiceService) { }
}