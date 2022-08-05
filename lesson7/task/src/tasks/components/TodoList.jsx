import React, { Component } from 'react';
import TasksList from './TasksList.jsx';
import { connect } from 'react-redux';
import * as tasksActions from '../tasks.actions';
import CreateTaskInput from './CreateTaskInput.jsx';
import { tasksListSelector } from '../tasks.selectors.js';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <>
        <h1 className="title">Todo list</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
