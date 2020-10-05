import { connect } from "react-redux";
import TodoList from "./todo_list.jsx";
import { allTodos } from "../../reducers/selectors.js";
import { receiveTodo, fetchTodos } from "../../actions/todo_actions.js";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => {
      return dispatch(receiveTodo(todo));
    },
    receiveTodos: () => {
      return dispatch(fetchTodos());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
