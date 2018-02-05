import React, {Component} from 'react';

import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/html5">Html 5</Link></NavItem>
                        <NavItem><Link to="/css3">Css 3</Link></NavItem>
                        <NavItem><Link to="/js">JavaScript</Link></NavItem>
                        <NavItem><Link to="/bs">Bootstrap</Link></NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="https://developer.mozilla.org/zh-CN/">MDN Web 文档</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
