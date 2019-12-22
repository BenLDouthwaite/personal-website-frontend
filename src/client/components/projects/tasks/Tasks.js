import React, { Component } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

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
            <Button onClick={this.submitNewTask}>
                Submit
            </Button>
        </div>
        { this.state.tasks.length > 0 &&
            <div>
                <ol>
                  {this.state.tasks.map(task => <li>{task.name}</li>)}
                </ol>
            </div>
        }
      </div>
    );
  }
}

export default Tasks;