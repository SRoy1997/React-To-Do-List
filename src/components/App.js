import { Component } from "react";

import TodoItem from "./TodoItem";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };
  }

  componentDidMount() {
    this.setState({
      todos: [{ id: 1, title: "Test todo items", done: false }],
    });
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      return <TodoItem key={todo.id} {...todo} />;
    });
  }

  render() {
    return (
      <div className="app">
        <p className="title">To-Do List</p>

        <form className="add-todo">
          <input type="text" placeholder="Add To-Do" />

          <button>Add</button>
        </form>

        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
