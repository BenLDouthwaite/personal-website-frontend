import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <p>A collection of my personal projects. To view my contracted work, please contact me directly.</p>
        <p>Many projects are open source, and visible on my <a href="https://github.com/BenLDouthwaite">GitHub</a> profile.</p>

        <ul>
          <li><NavLink to="/projects/reference">Reference</NavLink></li>
          <li><NavLink to="/projects/chess">Chess</NavLink></li>
          <li><NavLink to="/projects/korean">Korean</NavLink></li>
          <li><NavLink to="/projects/word-scrambler">Word Scrambler</NavLink></li>
          <li><NavLink to="/projects/sandbox">Sandbox</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Projects;