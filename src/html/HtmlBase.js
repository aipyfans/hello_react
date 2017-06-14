import React, {Component} from 'react';

class HtmlBase extends Component {

    render() {
        return (
            // <!doctype html>
            <html>

            <head>
                <meta charSet="utf-8"/>

                {/*链接外部样式表*/}
                <link type="text/css" rel="stylesheet" href="../App.css" />

                <title>HtmlBase</title>

                <style>

                </style>

                <script>

                </script>

            </head>

            <body>
            <h1>1级标题</h1>
            <h2>2级标题</h2>
            <h3>3级标题</h3>
            <h4>4级标题</h4>
            <h5>5级标题</h5>
            <h6>6级标题</h6>
            <p>
                <a href="https://www.baidu.com/" target="_blank">超链接：百度一下？</a>
                <br/>
                <a href="../../public/index.html">超链接：相对路径</a>
            </p>

            <p>
                这是一个段落，这是一个段落，
                <strong>特别强调的文本</strong>，
                <q>这里是一个短引用</q>，
                <em>这里强调一个要点</em>，
                <code>console.log("程序代码块")</code>
            </p>

            <blockquote>
                这是一个段落的<q>块引用</q>
            </blockquote>

            <p>
                <img src="http://p9.pstatp.com/large/17f50004c16e3dd53e72" alt="高圆圆" width="640" height="501"/>
            </p>

            <p>
                <ul>
                    <li>高圆圆</li>
                    <li>贾静雯</li>
                    <li>梁咏琪</li>
                </ul>
                <ol>
                    <li>高圆圆</li>
                    <li>贾静雯</li>
                    <li>梁咏琪</li>
                </ol>
            </p>

            </body>

            </html>
        );
    }

}

export default HtmlBase;
