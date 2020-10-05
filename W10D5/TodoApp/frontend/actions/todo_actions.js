export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
import * as APIUtil from "../util/todo_api_util.js";

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos,
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo,
  };
};

window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

export const fetchTodos = () => (dispatch) => {
  return APIUtil.fetchTodos().then((result) => dispatch(receiveTodos(result)));
};

window.fetchTodos = fetchTodos;
