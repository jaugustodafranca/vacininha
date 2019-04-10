import React, { Component } from 'react';
import Form from '../../../components/Form';

export default class Cadastros extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
    return (
        <div className="cadastros">
            <p>Cadastros</p>
            <Form />
        </div>
        );
    }
}
