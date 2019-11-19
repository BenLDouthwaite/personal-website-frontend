import React, { Component } from "react";

class Sandbox extends Component {
  render() {

      let buttonClick = () => {
          import(/* webpackChunkName: "math" */ "./math").then(math => {
              console.log("Addition demo: " + math.add(10, 20));
          })
      }

    return (
      <div>
        <h1>Sandbox</h1>
        <button onClick={buttonClick}>
            Demo Code Loading
        </button>
      </div>
    );
  }
}

export default Sandbox;