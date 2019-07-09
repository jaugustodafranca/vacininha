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
        <h3>Gráfico peso X idade</h3>
        <LineChart className="weight-chart"/><br/><br/>
        <h3>Gráfico altura X idade</h3>
        <LineChart className="weight-chart"/>
        </React.Fragment>
        );
    }
}
