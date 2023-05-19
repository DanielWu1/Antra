import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

// First, create a feature selector to select the todo state from the root state
export const selectTodoState = createFeatureSelector<TodoState>('todos');

// Then, create a selector to select the todos array from the todo state
export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);
