//Basic React Imports
import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Semantic
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

//Own css styling
import './Login.css';

class SelectView extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.viewSelector("viewLogin", e);
    }

    render() {
        return (
            <Segment raised>
                <Header as='h3' color='blue' textAlign='center'>
                    Please select your view
                </Header>

                <span className="selectViewButton">
                    <Button onClick={() => this.handleClick('customer')} size='massive' color='blue' circular icon='user'></Button>
                </span>
                <span className="selectViewButton">
                    <Button onClick={() => this.handleClick('staff')} size='massive' color='blue' circular icon='settings'></Button>
                </span>
                <span className="selectViewButton">
                    <Button onClick={() => this.handleClick('rider')} size='massive' color='blue' circular icon='motorcycle'></Button>
                </span>
                <span className="selectViewButton">
                    <Button onClick={() => this.handleClick('manager')} size='massive' color='blue' circular icon='settings'></Button>
                </span>
            </Segment>
        )
    }
}

export default SelectView