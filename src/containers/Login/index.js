import React, { Component } from 'react';

export default class Login extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }

    handleLogin() {
        this.props.history.push(`/carteirinha`);
    }
    render() {
    return (
        
        <div className="main-container">
            <a onClick={() => this.handleLogin()}>Login</a>
        </div>
        );
    }
}
