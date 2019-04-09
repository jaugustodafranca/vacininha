import React, { Component } from 'react';
import LineChart from '../../components/LineChart.js';
import Calendar from "../../components/Calendar.js";
import logo from '../../images/vacininha.png';

export default class Carteirinha extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
    return (
        <React.Fragment>
        
        <div className="main-container">
            <div className="title">
                <img src={logo} />
                <h1>Vacininha</h1>
            </div>
            <div className="container" >
                <div className="content">
                    
                    <h3>Evolução da Criança</h3>
                    <LineChart className="weight-chart"/>
                </div>
                <div className="labels">
                    <button className="label pink">Dados</button>
                    <button className="label orange">Graficos</button>
                    <button className="label blue">Graficos</button>
                    <button className="label green">Graficos</button>
                    <button className="label yellow">Graficos</button>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}
