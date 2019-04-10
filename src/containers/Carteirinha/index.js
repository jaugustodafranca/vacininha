import React, { Component } from 'react';
import Calendar from "../../components/Calendar.js";
import logo from '../../images/vacininha.png';
import ChildRoutes from '../../core/ChildRoutes'; 

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
                    <ChildRoutes {...this.props} />
                </div>
                <div className="labels">
                    <button className="label pink">Capa</button>
                    <button className="label orange">Cadastros</button>
                    <button className="label blue">Agenda</button>
                    <button className="label green">Gráficos</button>
                    <button className="label yellow">Sair</button>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}
