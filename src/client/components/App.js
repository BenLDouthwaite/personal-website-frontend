import React, { Component } from 'react';
import MyRouter from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css';

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
  				console.log("Api connected. Response: " + res);
  			})
	}

	render() {
    	return <div className="container" id="home">
    		<MyRouter/>
		</div>
  	}
}

export default App;