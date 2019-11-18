import React, { Component } from "react";

import Footer from "./footer";

class Home extends Component {

  render() {

    let buttonClick = () => {

        import(/* webpackChunkName: "math" */ "./math").then(math => {
            console.log("Addition demo: " + math.add(10, 20));
        })
    }

    return (
      <div>
        <h2>About Me</h2>
        <p>Software Engineer. Interested in linguistics, graphic design and all aspects of automation.
        </p>
        <button onClick={buttonClick}>
            Demo Code Loading
        </button>
        <Footer/>
      </div>
    );
  }
}

export default Home;