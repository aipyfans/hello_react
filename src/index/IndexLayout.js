import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './IndexLayout.css';

import Home from './Home';
import Html from './Html';
import Css from './Css';
import Other from './Other';

class IndexLayout extends Component {

    render() {
        return (
            <Router>
                <div>

                    <header>
                        <p>前端学习-Demo</p>
                    </header>

                    <nav>
                        <ul>
                            <li><NavLink to="/home" activeClassName={"Actived"}>Home</NavLink></li>
                            <li><NavLink to="/html" activeClassName={"Actived"}>Html</NavLink></li>
                            <li><NavLink to="/css" activeClassName={"Actived"}>Css</NavLink></li>
                            <li><NavLink to="/other" activeClassName={"Actived"}>Other</NavLink></li>
                        </ul>
                    </nav>

                    <section>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/html" component={Html}/>
                        <Route path="/css" component={Css}/>
                        <Route path="/other" component={Other}/>
                    </section>

                    <footer>

                    </footer>

                </div>
            </Router>
        );
    }

}

export default IndexLayout;