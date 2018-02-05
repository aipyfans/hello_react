import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home';
import Html5 from '../html5';
import Css3 from '../css3';
import Js from '../js';
import Bs from '../bs';


export default class Body extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/html5" component={Html5}/>
                <Route path="/css3" component={Css3}/>
                <Route path="/js" component={Js}/>
                <Route path="/bs" component={Bs}/>
            </Switch>
        );
    }

}
