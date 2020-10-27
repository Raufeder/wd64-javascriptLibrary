// const React = require('react');
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../styles/Login.css"

// Challenge
// Create 2 state variables, and wire up the two input fields with the state variables

// TODO: Build functionality to send info to the API

const LoginComponent = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const triggerEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    const triggerPasswordInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // if both the email and password are present
        // send them off to the API to verify if its a user
        // if response is OK, take the token from the response and call props.authenticateUser function
        // if the response is NOT OK display error message but do nothing
        if(email && password){
            fetch('http://localhost:8080/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            })
            .then(response => response.json())
            .then((body) => {
                props.authenticateUser(body.token);
            })
            .catch(error => console.log(error));
        }
    };

    return (
        <Form className="authForm" id='loginForm' onSubmit={handleLoginSubmit}>
            <h3>Login</h3>
            <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input onChange={triggerEmailInputChange} value={email} id="email" type="email" name="email" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password:</Label>
                <Input onChange={triggerPasswordInputChange} value={password} id="password" type="password" name="password" />
            </FormGroup>
            <Button>Login</Button>
        </Form>
    );
};

// Challenge Create a LOGIN form that has 2 inputs
// input1: Email
// input2: Pass

// import your component into the app.js
// MOUNT the component in the App component
// ReactStrap

// module.exports = LoginComponent
export default LoginComponent;