import React, {Component} from 'react';
import {ButtonGroup,ButtonToolbar, Button,DropdownButton,MenuItem} from 'react-bootstrap';

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

                尺寸

                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large">Large button</Button>
                    <Button bsSize="large">Large button</Button>
                </ButtonToolbar>

                <br/>

                <ButtonToolbar>
                    <Button bsStyle="primary">Default button</Button>
                    <Button>Default button</Button>
                </ButtonToolbar>

                <br/>

                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="small">Small button</Button>
                    <Button bsSize="small">Small button</Button>
                </ButtonToolbar>

                <br/>

                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
                    <Button bsSize="xsmall">Extra small button</Button>
                </ButtonToolbar>

                <br/>

                <div className="Well">
                    <Button bsStyle="primary" bsSize="large" block>块级别按钮</Button>
                    <Button bsSize="large" block>块级别按钮</Button>
                </div>

                激活状态

                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
                    <Button bsSize="large" active>Button</Button>
                </ButtonToolbar>

                禁用状态

                <ButtonToolbar>
                    <Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
                    <Button bsSize="large" disabled>Button</Button>
                </ButtonToolbar>

                按钮标签

                <ButtonToolbar>
                    <Button href="#">Link</Button>
                    <Button >Button</Button>
                </ButtonToolbar>

                按钮群组<br/>

                基本示例<br/>
                <ButtonGroup>
                    <Button>左</Button>
                    <Button>中</Button>
                    <Button>右</Button>
                </ButtonGroup>

                <br/>按钮工具栏<br/>
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button>5</Button>
                        <Button>6</Button>
                        <Button>7</Button>
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button>8</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <br/>尺寸<br/>
                <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                        <Button>左</Button>
                        <Button>中</Button>
                        <Button>右</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <ButtonToolbar>
                    <ButtonGroup>
                        <Button>左</Button>
                        <Button>中</Button>
                        <Button>右</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <ButtonToolbar>
                    <ButtonGroup bsSize="small">
                        <Button>左</Button>
                        <Button>中</Button>
                        <Button>右</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <ButtonToolbar>
                    <ButtonGroup bsSize="xsmall">
                        <Button>左</Button>
                        <Button>中</Button>
                        <Button>右</Button>
                    </ButtonGroup>
                </ButtonToolbar>

                <br/>嵌套<br/>
                <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <DropdownButton title="下拉" id="bg-nested-dropdown">
                        <MenuItem eventKey="1">链接1</MenuItem>
                        <MenuItem eventKey="2">链接2</MenuItem>
                    </DropdownButton>
                </ButtonGroup>

                <br/>垂直排列属性<br/>
                <ButtonGroup vertical>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
                        <MenuItem eventKey="1">Dropdown link</MenuItem>
                        <MenuItem eventKey="2">Dropdown link</MenuItem>
                    </DropdownButton>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                        <MenuItem eventKey="1">Dropdown link</MenuItem>
                        <MenuItem eventKey="2">Dropdown link</MenuItem>
                    </DropdownButton>
                    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
                        <MenuItem eventKey="1">Dropdown link</MenuItem>
                        <MenuItem eventKey="2">Dropdown link</MenuItem>
                    </DropdownButton>
                </ButtonGroup>

                <ButtonGroup vertical block>
                    <Button>全宽度按钮</Button>
                    <Button>全宽度按钮</Button>
                </ButtonGroup>
            </div>
        );
    }

}

export default Other;