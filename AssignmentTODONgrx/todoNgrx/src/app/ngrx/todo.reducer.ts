import { createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';
import { Todo } from '../service/todo';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: any;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};
function generateID() {
    return Math.floor(Math.random() * 10000);
}

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({ ...state, loading: true })),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => ({ ...state, todos, loading: false })),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(TodoActions.completeTodo, (state, { id }) => ({ ...state, todos: state.todos.map((each) =>{
    if(each.id === id){
        return {
            ...each,
            completed: !each.completed,
        }
    }
    else{
        return each;
    }
  })})),
  on(TodoActions.addTodo, (state, { title }) => ({ ...state, todos: [{userId: 1, id: generateID(), title: title, completed: false},...state.todos]})),
  on(TodoActions.deleteTodo, (state, { id }) => ({ ...state, todos: state.todos.filter((each) =>{
    return each.id !== id;
  })}))
);
