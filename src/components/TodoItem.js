import { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.done,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => ({
      done: !state.done,
    }));
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onClick={this.handleClick}
          defaultChecked={this.state.done}
        />

        <p className={this.state.done ? "done" : ""}>{this.props.title}</p>

        <button
          className="cancel-btn"
          onClick={() => this.props.handleDelete(this.props.title)}
        >
          X
        </button>
      </div>
    );
  }
}
