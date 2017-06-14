import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// import Form from "./other/Form";
// import Table from "./other/Table";
// import Html5 from "./other/Html5";
// import HtmlBase from "./html/HtmlBase";
// import CssBase from "./css/CssBase";

import Layout from "./css/Layout";


class App extends Component {

    render() {
        return (
            <div className="App">

                {/*<div className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<h2>Welcome to React</h2>*/}
                {/*</div>*/}

                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}

                <Layout/>

            </div>
        );
    }

}

export default App;
