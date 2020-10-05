import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 10000),
      title: "",
      body: "",
    };
    this.handleBody = this.handleBody.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleTitle(e) {
    let title = e.currentTarget.value;
    this.setState({ title });
  }
  handleBody(e) {
    let body = e.currentTarget.value;
    this.setState({ body });
  }

  updateState(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({
      id: Math.floor(Math.random() * 10000),
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.updateState}>
        <label>
          Title
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitle}
          />
        </label>
        <br />
        <label>
          Body
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleBody}
          />
        </label>
        <br />
        <input type="submit" value="Create New Todo" />
      </form>
    );
  }
}

export default TodoForm;
