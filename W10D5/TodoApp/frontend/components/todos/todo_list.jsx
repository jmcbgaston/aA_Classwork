import React from "react";
import { TodoListItem } from "./todo_list_item.jsx";
import TodoForm from "../todo_list/todo_form.jsx";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveTodos();
  }

  render() {
    return (
      <div>
        <h3>Your Todos</h3>
        <ul>
          {this.props.todos.map((todo, idx) => {
            return <TodoListItem key={idx} todo={todo} />;
          })}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}

export default TodoList;
