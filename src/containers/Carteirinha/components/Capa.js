import React, { Component } from 'react';
import bebe from '../../../images/bebe.png';

export default class Capa extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
    return (
        <div className="capa">
            <h3>Miguel</h3>
            <p>2 Meses</p>
            <img src={bebe} />
        </div>
        );
    }
}
