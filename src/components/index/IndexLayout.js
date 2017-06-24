import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import './IndexLayout.css';

import Home from './Home';
import Html from './Html';
import Css from './Css';
import Other from './Other';

class IndexLayout extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const currentBaseUrl = this.props.match.url;
        return (
                <div>

                    <header>
                        <p>前端学习-Demo [ JavaScript & Html & Css & Sass & React-Bootstrap & React-Router-Dom & React]</p>
                    </header>

                    <nav>
                        <ul>
                            <li><NavLink exact to={currentBaseUrl} activeClassName={"Actived"}>Home</NavLink></li>
                            <li><NavLink to={`${currentBaseUrl}/html`} activeClassName={"Actived"}>Html</NavLink></li>
                            <li><NavLink to={`${currentBaseUrl}/css`} activeClassName={"Actived"}>Css</NavLink></li>
                            <li><NavLink to={`${currentBaseUrl}/other`} activeClassName={"Actived"}>Other</NavLink></li>
                        </ul>
                    </nav>

                    <section>
                        <Route exact path={`${currentBaseUrl}/`} component={Home}/>
                        <Route path={`${currentBaseUrl}/html`} component={Html}/>
                        <Route path={`${currentBaseUrl}/css`} component={Css}/>
                        <Route path={`${currentBaseUrl}/other`} component={Other}/>
                    </section>

                    <footer>

                    </footer>

                </div>
        );
    }

}

export default IndexLayout;