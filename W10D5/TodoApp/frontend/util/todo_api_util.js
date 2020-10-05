export const fetchTodos = () => {
  return $.ajax({
    method: "GET",
    url: "/api/todos",
  });
};

window.fetchTodos = fetchTodos;

export const createTodo = (todo) => {
  return $.ajax({
    method: "POST",
    url: "/api/todos",
    data: {
      todo,
    },
  });
};

window.createTodo = createTodo;
