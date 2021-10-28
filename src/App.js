import React, { Component } from "react";
import ContentBox from "./component/ContentBox";
import FormInput from "./component/FormInput";
import Task from "./component/Task";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
    };
  }

  taskEvent = (newTask) => {
    this.setState({
      taskList: [...this.state.taskList, newTask],
    });
  };

  removeEvent = (task) => {
    const tasks = this.state.taskList;
    const filtered = tasks.filter((t) => {
      return t.id != task.id;
    });
    this.setState({ taskList: filtered });
  };

  doneTask = (task) => {
    if (task.isDone == false) {
      // change isDone to true
      const updateTask = { id: task.id, task: task.task, isDone: true };
      const tasks = this.state.taskList.filter((t) => {
        return t.id != task.id;
      });

      this.setState({ taskList: [...tasks, updateTask] });
    } else {
      // change isDone to false
      const updateTask = { id: task.id, task: task.task, isDone: false };
      const tasks = this.state.taskList.filter((t) => {
        return t.id != task.id;
      });
      this.setState({ taskList: [...tasks, updateTask] });
    }
  };

  clearTasks = () => {
    this.setState({ taskList: [] });
  };

  render() {
    // map task
    const list = this.state.taskList.map((val) => {
      return (
        <Task
          key={val.id}
          content={val}
          remove={this.removeEvent}
          checkBox={this.doneTask}
        />
      );
    });

    return (
      <div className="container">
        <div className="title">
          <h1 className="app-name">To-do App</h1>
        </div>

        <div className="todo-box">
          <FormInput event={this.taskEvent} />
          <ContentBox clear={this.clearTasks}>{list}</ContentBox>
        </div>
      </div>
    );
  }
}

export default App;
