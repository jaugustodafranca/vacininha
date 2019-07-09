import React, { Component } from 'react';

import LineChart from '../../../components/LineChart';

export class Graficos extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.fetchMedidas(this.props.currentUser.id)
    }

    render() {
    return (
        <React.Fragment>
        <h3>Gráfico peso X idade</h3>
        <LineChart data={measureDatas} className="weight-chart"/><br/><br/>
        <h3>Gráfico altura X idade</h3>
        <LineChart className="weight-chart"/>
        </React.Fragment>
        );
    }
}
export default connect((store) => ({ 
    currentUser: store.carteirinha.currentUser,
    measureDatas: store.carteirinha.measureDatas
  }), actions)(Graficos);