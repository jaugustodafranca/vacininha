import React, { Component } from 'react';
import LineChart from '../../components/LineChart.js';
import Calendar from "../../components/Calendar.js";

export default class Carteirinha extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
    return (

        <div className="App">
            <h3>Vacininha</h3>
            <h3>Evolução da Criança</h3>
            <LineChart/>
        </div>
        );
    }
}
