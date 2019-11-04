import React, { Component } from 'react';

const URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080'

class App extends Component {
  render() {
    return <h1>Hello World. This is a dummy update. And soon it will be a whole application! Once I have time. I'm super busy. Also. I want this to look pretty</h1>;
  }

  componentWillMount() {
  	fetch(URL + "/hello")
  		.then(response => response.json())
  		.then(res => {
  			console.log(res)
  		})
  }

}

export default App;