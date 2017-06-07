import React, {Component} from 'react';
import './Html5.css';

class Html5 extends Component {

    render() {
        return (
            <div>

                <header>
                    <br/>
                    <time datetime="2012-03-12">2017-06-07 18:03:25</time>
                </header>

                <nav>
                    <ul>
                        <li>首页</li>
                        <li class="selected">博客</li>
                        <li>生活</li>
                        <li>科技</li>
                        <li>体育</li>
                    </ul>
                </nav>

                <div id="tableContainer">
                    <div id="tableRow">
                        <section id="drinks"></section>
                        <section id="blog"></section>
                        <aside></aside>
                    </div>
                </div>

                <footer>

                </footer>


            </div>
        );
    }

}

export default Html5;
