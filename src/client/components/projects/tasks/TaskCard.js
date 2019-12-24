import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class TaskCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deleteTask = (event) => {
        this.props.deleteTask(this.props.task);
    }

  render() {

    return (
      <div>
        <ol>
          <h3>ID: {this.props.task.id}. Name : {this.props.task.name}</h3>
          <Button onClick={this.deleteTask}>
              Delete
          </Button>
        </ol>
      </div>
    );
  }
}

export default TaskCard;