import React, { Component } from 'react';
import Calendar from "../../components/Calendar.js";
import logo from '../../images/vacininha.png';
import ChildRoutes from '../../core/ChildRoutes'; 

export default class Carteirinha extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }

    handleClickLabel(label) {
        this.props.history.push(`/carteirinha/${label}`);
    }

    handleLogout() {
        this.props.history.push(`/login`);
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
                    <button className="label pink" onClick={() => this.handleClickLabel('capa')}>Capa</button>
                    <button className="label orange" onClick={() => this.handleClickLabel('cadastros')}>Cadastros</button>
                    <button className="label blue" onClick={() => this.handleClickLabel('agenda')}>Agenda</button>
                    <button className="label green" onClick={() => this.handleClickLabel('graficos')}>Gráficos</button>
                    <button className="label yellow"  onClick={() => this.handleLogout()}>Sair</button>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}
