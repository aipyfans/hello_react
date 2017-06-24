import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import IndexLayout from "../components/index/IndexLayout";
import Login from "../components/user/Login";

const token = sessionStorage.getItem('accessToken');

class RouteSwitch extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                {!token ? <Redirect to="/login"/> : null}
                <Switch>
                    <Route path="/app" component={IndexLayout} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }

}

export default RouteSwitch;
