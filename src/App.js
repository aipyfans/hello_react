import React, {Component} from 'react';
import './App.css';


import {BrowserRouter as Router} from 'react-router-dom';
import RouteSwitch from './components/RouteSwitch';


class App extends Component {

    render() {
        return (
            <div className="App">


                <Router>
                    <RouteSwitch />
                </Router>

            </div>
        );
    }

}

export default App;
