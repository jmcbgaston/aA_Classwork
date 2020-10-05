export const allTodos = (state) => {
  let keys = Object.keys(state.todos);

  let todos = keys.map((key) => {
    return state.todos[key];
  });

  return todos;
};

window.allTodos = allTodos;
