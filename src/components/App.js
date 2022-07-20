import { Component } from "react";

import TodoItem from "./TodoItem";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState((state, props) => ({
      todos: [{ title: state.todo, done: false }, ...state.todos],
      todo: "",
    }));
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  handleDelete(title) {
    this.setState((state, props) => ({
      todos: state.todos.filter((todo) => todo.title !== title),
    }));
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      return (
        <TodoItem key={todo.id} {...todo} handleDelete={this.handleDelete} />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <p className="title">To-Do List</p>

        <form className="add-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="Add To-Do"
            onChange={this.handleChange}
            value={this.state.todo}
          />

          <button>Add</button>
        </form>

        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
