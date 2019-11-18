import React, { Component } from 'react';
import MyRouter from './router.js'

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
    	return <div className="container" id="home">
    		<h1>Hello World. Main Page. again awd</h1>
    		<MyRouter/>
    		<h2>{this.state.name}</h2>
		</div>
  	}
}

export default App;