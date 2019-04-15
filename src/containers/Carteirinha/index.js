import React, { Component } from 'react';
import Calendar from "../../components/Calendar.js";
import logo from '../../images/vacininha.png';
import ChildRoutes from '../../core/ChildRoutes'; 

export default class Carteirinha extends Component {
  
    constructor(props){
        super(props);
        this.state = {
        };
    }

    handleClickLabel(label) {
        this.props.history.push(`/carteirinha/${label}`);
    }

    handleLogout() {
        this.props.history.push(`/login`);
    }


    render() {

        var labels = [{
            name: 'Capa',
            key: 'capa',
            color: 'pink'
          }, {
            name: 'Cadastros',
            key: 'cadastros',
            color: 'orange'
          }, {
            name: 'Agenda',
            key: 'agenda',
            color: 'blue'
          }, {
            name: 'Gráficos',
            key: 'graficos',
            color: 'green'
          }];
      
        const labelsComponent = labels.map((item) => {
          const isActive = item.key === this.props.match.params.tab;
          const CSSClass = `label ${item.color} ${ isActive ? 'is-selected' : '' }`;
          return (
            <button
              className={CSSClass}
              onClick={() =>this.handleClickLabel(item.key)}
              key={item.key}>
              {item.name}
            </button>
          );
        });



    return (
        <React.Fragment>
        
        <div className="main-container">
            <div className="title">
                <img src={logo} />
                <h1>Vacininha</h1>
            </div>
            <div className=" carteirinha" >
                <div className="labels">
                    {labelsComponent}
                    <button className="label yellow"  onClick={() => this.handleLogout()}>Sair</button>
                </div>
                <div className="content">
                    <ChildRoutes {...this.props} />
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}
