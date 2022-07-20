import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };
  }

  render() {
    return (
      <div className="app">
        <h1>To-Do List</h1>

        <form className="add-todo">
          <input type="text" placehoder="Add To-Do" />

          <button>Add</button>
        </form>

        <div className="todo-item">
          <input type="checkbox" className="checkbox" />

          <p className="description">To-Do Item Description</p>

          <button className="cancel-btn">X</button>
        </div>
      </div>
    );
  }
}

export default App;
