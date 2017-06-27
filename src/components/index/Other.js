import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import './Other.css';

import {Nav, NavItem} from 'react-bootstrap';

import ButtonAll from '../bootstrap/ButtonAll';
import Modal from '../bootstrap/Modal';
import Navigation from '../bootstrap/Navigation';
import Form from '../bootstrap/Form';
import Medica from '../bootstrap/Medica';

class Other extends Component {

    constructor(props){
        super(props);
        this.state = {activeKeyId:1};
    }

    handleSelect(selectedKey,event) {
        this.setState({activeKeyId:selectedKey});;
    }

    render() {

        const currentBaseUrl = this.props.match.url;

        return (
            <div>

                {/*<nav className="Other-nav">*/}

                    {/*<ul>*/}
                        {/*<li><NavLink exact to={currentBaseUrl} activeClassName={"Other-actived"}>Button</NavLink></li>*/}
                        {/*<li><NavLink to={`${currentBaseUrl}/modal`} activeClassName={"Other-actived"}>Modal</NavLink></li>*/}
                        {/*<li><NavLink to={`${currentBaseUrl}/navigation`} activeClassName={"Other-actived"}>Navigation</NavLink></li>*/}
                        {/*<li><NavLink to={`${currentBaseUrl}/form`} activeClassName={"Other-actived"}>Form</NavLink></li>*/}
                        {/*<li><NavLink to={`${currentBaseUrl}/medica`} activeClassName={"Other-actived"}>Medica</NavLink></li>*/}
                    {/*</ul>*/}
                {/*</nav>*/}

                <Nav bsStyle="pills" stacked activeKey={this.state.activeKeyId} onSelect={this.handleSelect.bind(this)} className="Other-nav" >
                    <NavItem eventKey={1} href={currentBaseUrl}>Button</NavItem>
                    <NavItem eventKey={2} href={`${currentBaseUrl}/modal`}>Modal</NavItem>
                    <NavItem eventKey={3} href={`${currentBaseUrl}/navigation`}>Navigation</NavItem>
                    <NavItem eventKey={4} href={`${currentBaseUrl}/form`}>Form</NavItem>
                    <NavItem eventKey={5} href={`${currentBaseUrl}/medica`}>Medica</NavItem>
                </Nav>

                <section className="Other-section">
                    <Route exact path={`${currentBaseUrl}/`} component={ButtonAll}/>
                    <Route path={`${currentBaseUrl}/modal`} component={Modal}/>
                    <Route path={`${currentBaseUrl}/navigation`} component={Navigation}/>
                    <Route path={`${currentBaseUrl}/form`} component={Form}/>
                    <Route path={`${currentBaseUrl}/medica`} component={Medica}/>
                </section>

            </div>
        );
    }

}

export default Other;