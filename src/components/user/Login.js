import React, {Component} from 'react';
import {Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel} from 'react-bootstrap';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Login.css';

class Login extends Component {

    login(){
        sessionStorage.setItem('accessToken','access_token');
        this.props.history.push('/app');
    }

    render() {
        return (
            <form className="Login" onSubmit={this.login.bind(this)}>

                <Form horizontal >
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            邮件
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            密码
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>记住我</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onPress={() => {
                                sessionStorage.setItem('accessToken','access_token');
                                this.props.history.push('/app')
                            }}>
                                登录
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>

            </form>
        );
    }

}

export default Login;