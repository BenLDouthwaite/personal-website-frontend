import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import TaskCard from "./TaskCard"

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTaskName: ''
        }
    }

    componentWillMount() {
        this.refreshTasks();
    }

    refreshTasks() {
        fetch("/task")
                .then(response => response.json())
                .then(res => {
                    this.setState({tasks: res});
                });
    }

    submitNewTask = () => {

        let url = '/task';
        let options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({
                     name: this.state.newTaskName
                 })
            };
        fetch(url, options)
            .then(response => {
                this.refreshTasks();
                this.setState({newTaskName: ''});
            });
    };

    handleNameChange = (event) => {
        const newTaskName = event.target.value;
        this.setState({newTaskName});
    };

    deleteTask = (task) => {

        let url = '/task/' + task.id;
        let options = {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
            };
        fetch(url, options)
            .then(response => {
                this.refreshTasks();
            });
    }

    doneTask = (task) => {

        let url = '/task/' + task.id + '?done=true';
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                 name: this.state.newTaskName
            })
        };
        fetch(url, options)
            .then(response => {
                this.refreshTasks();
                this.setState({newTaskName: ''});
            });

    }

  render() {

    return (
      <div>
        <h1>Tasks</h1>
        <div>
            <h2>add task</h2>
            <FormControl
                type="text"
                value={this.state.newTaskName}
                placeholder="Name"
                onChange={this.handleNameChange}
            />
            { /* TODO  Update to work with 'enter' key press too. */ }
            <Button onClick={this.submitNewTask}>
                Submit
            </Button>
        </div>
        { this.state.tasks.length > 0 &&
            <Container>
              {this.state.tasks.map(task => {
                return <TaskCard
                    key={task.id}
                    task={task}
                    doneTask={this.doneTask}
                    deleteTask={this.deleteTask}
                />
              })}
            </Container>
        }
      </div>
    );
  }
}

export default Tasks;