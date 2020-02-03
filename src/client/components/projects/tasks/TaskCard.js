import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class TaskCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deleteTask = (event) => {
        this.props.deleteTask(this.props.task);
    }

    doneTask = (event) => {
        this.props.doneTask(this.props.task);
    }

  render() {

    let text;
    if (!this.props.task.done) {
        text = <p>ID: {this.props.task.id} Name : {this.props.task.name}</p>;
    } else {
        text = <p><s>ID: {this.props.task.id} Name : {this.props.task.name}</s></p>;
    }

    return (
        <Card body>
          <Row>
            <Col>
                {text}
            </Col>
            <Col xs={'auto'}>
                <Button onClick={this.doneTask}>
                    Done
                </Button>
            </Col>
            <Col xs={'auto'}>
                <Button variant="danger" onClick={this.deleteTask}>
                    Delete
                </Button>
            </Col>
          </Row>
        </Card>
    );
  }
}

export default TaskCard;