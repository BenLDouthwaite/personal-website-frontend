import React, { Component } from "react";


class Sandbox extends Component {

  render() {

    let buttonClick = () => {
        import(/* webpackChunkName: "math" */ "../../utils/math").then(math => {
            console.log("Addition demo: " + math.add(10, 20));
        })
    }

    return (
      <div>
        <h2>Sandbox</h2>
        <p>Collection of random frontend tests.
        </p>
        <h3>Dynamic Code Loading</h3>
        <button onClick={buttonClick}>
            Demo Code Loading
        </button>
      </div>
    );
  }
}

export default Sandbox;