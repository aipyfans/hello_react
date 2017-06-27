import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import './IndexLayout.css';

import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';

import Home from './Home';
import Html from './Html';
import Css from './Css';
import Other from './Other';

class IndexLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const currentBaseUrl = this.props.match.url;

        return (
            <div className="IL-div">

                <header>
                    <p>前端学习-Demo [ JavaScript & Html & Css & Sass & React-Bootstrap & React-Router-Dom & React]</p>
                </header>


                <Navbar collapseOnSelect className="navbar-bottom">

                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/app">静水流深</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>

                    <Navbar.Collapse>

                        <Nav >
                            <NavItem eventKey={1}>
                                <NavLink exact to={currentBaseUrl} activeClassName={"Actived"}>Home</NavLink>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <NavLink to={`${currentBaseUrl}/html`} activeClassName={"Actived"}>Html</NavLink>
                            </NavItem>
                            <NavItem eventKey={3}>
                                <NavLink to={`${currentBaseUrl}/css`} activeClassName={"Actived"}>Css</NavLink>
                            </NavItem>
                            <NavItem eventKey={4}>
                                <NavLink to={`${currentBaseUrl}/other`} activeClassName={"Actived"}>Other</NavLink>
                            </NavItem>

                            <NavDropdown eventKey={5} title="下拉菜单" id="basic-nav-dropdown">
                                <MenuItem eventKey={5.1}>Action1</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={5.2}>Action2</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={5.3}>Action3</MenuItem>
                            </NavDropdown>

                        </Nav>

                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">我的博客</NavItem>
                            <NavItem eventKey={2} href="#">我的梦想</NavItem>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

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