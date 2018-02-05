import React, {Component} from 'react';

import Header from './nav/Header';
import Body from './nav/Body';

import {BrowserRouter} from 'react-router-dom';
import './App.css';

// @flow
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Body/>
                </div>
            </BrowserRouter>
        );
    }
}
