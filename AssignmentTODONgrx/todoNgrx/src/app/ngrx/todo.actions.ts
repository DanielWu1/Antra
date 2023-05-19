import { createAction, props } from "@ngrx/store";
import { Todo } from "../service/todo";

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction('[Todo] Load Todos Failure', props<{ error: any }>());
export const completeTodo = createAction('[Todo] Todo update', props<{ id: number }>());
export const addTodo = createAction('[Todo] Add Todo Success', props<{ title: string }>());
export const deleteTodo = createAction('[Todo] Todo deleted', props<{ id: number }>());