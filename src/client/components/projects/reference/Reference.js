import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import { NavLink } from "react-router-dom";

class Reference extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		    test: null,
		    directories: []
		};
	}

	componentWillMount() {
	    fetch("/reference/directories")
	        .then(response => response.json())
	        .then(res => {
	            this.setState({directories: res});
	            this.initReferenceFile(this.props.match.params.topic)
	        })
	}

    componentDidUpdate(prevProps) {
        if (this.props.match.params.topic != prevProps.match.params.topic) {
            this.initReferenceFile(this.props.match.params.topic)
        }
    }

    initReferenceFile(topic) {
        if (topic != null) {
            fetch("./reference/directory/" + topic)
                .then(response => response.text())
                .then(res => {
                    this.setState({test: res});
                });
        } else {
            this.setState({test: null});
        }

    }

	render() {
		return (
		    <div>
		        <h1>Reference - Knowledge Base</h1>
                <hr/>
                <Row>
                    <Col xs md lg="3">
                        <h2>Topics</h2>
                        <ul>
                        {
                            this.state.directories.map((directoryName, i) =>
                                <li key={i}><NavLink to={"/projects/reference/" + directoryName}>{directoryName}</NavLink></li>
                            )
                        }
                        </ul>
                    </Col>
                    <Col md="9">
                        <h2>Reference File</h2>
                        <hr/>
                        {
                            this.state.test &&
                            <ReactMarkdown source={this.state.test}/>
                        }
                    </Col>
                </Row>
                <hr/>
		    </div>
        )
	}
}

export default Reference;