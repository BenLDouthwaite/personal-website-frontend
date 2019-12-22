import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, NavLink, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import Blog from './blog';
import Loading from './loading';

import Reference from './projects/reference/Reference'
import Chess from './projects/chess/chess'
import Korean from './projects/korean/Korean'
import WordScrambler from './projects/wordscrambler/WordScrambler';
import Sandbox from './projects/sandbox/Sandbox.js'
import Tasks from './projects/tasks/Tasks.js'

class MyRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HashRouter>
              <div>
                <h1 className="header">Ben Douthwaite</h1>
                <ul className="header">
                  <li><NavLink exact to="/">About Me</NavLink></li>
                  <li><NavLink to="/projects">Projects</NavLink></li>
                  <li><NavLink to="/blog">Blog</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                   <Route exact path="/" component={Home}/>
                   <Switch>
                        <Route exact path="/projects" component={Projects}/>
                        <Route path="/projects/reference/:topic" component={Reference}/>
                        <Route path="/projects/reference" component={Reference}/>
                        <Route path="/projects/chess" component={Chess}/>
                        <Route path="/projects/korean" component={Korean}/>
                        <Route path="/projects/word-scrambler" component={WordScrambler}/>
                        <Route path="/projects/sandbox" component={Sandbox}/>
                        <Route path="/projects/tasks" component={Tasks}/>
                    </Switch>
                   <Route path="/blog" component={Blog}/>
                   <Route path="/contact" component={Contact}/>
                </div>
              </div>
            </HashRouter>
        )
    }

}

export default MyRouter