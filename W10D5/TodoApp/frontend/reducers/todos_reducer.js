import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false,
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true,
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let newStateTodos = {};
      for (let i = 0; i < action.todos.length; i++) {
        newStateTodos[action.todos[i].id] = action.todos[i];
      }
      return newStateTodos;
    case RECEIVE_TODO:
      let newStateTodo = Object.assign({}, state);
      newStateTodo[action.todo.id] = action.todo;
      return newStateTodo;
    default:
      return state;
  }
};

export default todosReducer;
