import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello World. This is a dummy update. And soon it will be a whole application! Once I have time. I'm super busy. Also. I want this to look pretty</h1>;
  }

  componentWillMount() {
  	console.log("about to mount yo")
  	fetch("http://localhost:8081/hello")
  		.then(response => response.json())
  		.then(res => {
  			console.log(res)
  		})
  }

}

export default App;