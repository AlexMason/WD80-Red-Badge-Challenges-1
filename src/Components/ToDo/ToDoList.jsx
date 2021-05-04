import React, { Component } from "react";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskInput: "",
      tasks: [],
    };
  }

  handleChange = (event) => {
    switch (event.target.id) {
      case "taskInput":
        this.setState({ taskInput: event.target.value });
        break;
    }
  };

  addTask = () => {
    this.setState({
      taskInput: "",
      tasks: [[this.state.taskInput, false], ...this.state.tasks],
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="taskInput"
          value={this.state.taskInput}
          onChange={this.handleChange}
        />{" "}
        <button onClick={this.addTask}>Add Task</button>
        <hr />
        <ul>
          {this.state.tasks.map((task, index) => {
            return (
              <li>
                <input
                  type="checkbox"
                  checked={task[1]}
                  onChange={() => {
                    let newArr = [...this.state.tasks];

                    newArr[index][1] = !newArr[index][1];

                    this.setState({ tasks: newArr });
                  }}
                />{" "}
                {task[1] ? <del>{task[0]}</del> : <span>{task[0]}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
