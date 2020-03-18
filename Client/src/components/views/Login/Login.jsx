//Basic React Imports
import React, { Component } from 'react';

//Semantic
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

//Own Stuff
import SelectView from './SelectView';
import SignUp from './SignUp';

import { Link } from "react-router-dom";


class Login extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.viewSelector('viewSignUp');
    }

    render() {
        let page = null;
        switch(this.props.userType) {
            case 'customer':
                page = "/customer";
                break;
            case 'staff':
                page = "/staff";
                break;
            case 'rider':
                page = "/rider";
                break;
            case 'manager':
                page = "/manager";  
                break;
       
        }
        return (
            <>
                <Segment raised>

                    <Form size='large'>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        <Link to={page}>
                            <Button color='blue' fluid size='large'>
                                Login
                            </Button>
                        </Link>
                    </Form>
                </Segment>
                <Message>
                    New to us? <a href='#' onClick={this.handleClick}>Sign Up</a>
                </Message>
            </>
        );
    }
}

export default Login;