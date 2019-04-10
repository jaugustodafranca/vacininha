import React, { Component } from 'react';

import LineChart from '../../../components/LineChart';

export default class Graficos extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
    return (
        <React.Fragment>
        <h3>Evolução da Criança</h3>
        <LineChart className="weight-chart"/>
        </React.Fragment>
        );
    }
}
