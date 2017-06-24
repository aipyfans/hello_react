import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Other.css';

class Other extends Component {

    render() {
        return (
            <div className="Other">
                <ButtonToolbar>
                    {/* 标准按钮 */}
                    <Button>Default</Button>

                    {/* 提供重要视觉感知及标识重要操作的按钮 */}
                    <Button bsStyle="primary">Primary</Button>

                    {/* 指示成功或正面操作按钮 */}
                    <Button bsStyle="success">Success</Button>

                    {/* 提供上下文帮助的提示信息按钮 */}
                    <Button bsStyle="info">Info</Button>

                    {/* 提醒操作需要小心使用 */}
                    <Button bsStyle="warning">Warning</Button>

                    {/* 提醒操作可能会导致危险或造成负面影响 */}
                    <Button bsStyle="danger">Danger</Button>

                    {/* 像一个链接但有按钮的操作行为 */}
                    <Button bsStyle="link">Link</Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large">Large button</Button>
                    <Button bsSize="large">Large button</Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle="primary">Default button</Button>
                    <Button>Default button</Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="small">Small button</Button>
                    <Button bsSize="small">Small button</Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
                    <Button bsSize="xsmall">Extra small button</Button>
                </ButtonToolbar>

            </div>
        );
    }

}

export default Other;