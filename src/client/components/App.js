import React, { Component } from 'react';

class App extends Component {
  
  	constructor(props) {
  		super(props);
  		this.state = {
  			name: ''
  		}
  	}

  	componentWillMount() {
		fetch("/hello")
  			.then(response => response.json())
  			.then(res => {
  				this.setState({name: res[0]});
  				console.log(res);
  			})
	}

	render() {
    	return <div>
    		<h1>Hello World. Main Page</h1>
    		<h2>{this.state.name}</h2>
		</div>
  	}
}

export default App;