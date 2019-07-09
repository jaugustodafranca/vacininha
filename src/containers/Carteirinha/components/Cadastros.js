import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';

// Redux
import { connect } from 'react-redux';
import * as actions from './../actions';

const columns = [{
    dataField: 'weight',
    text: 'Peso(Kg)',
}, {
    dataField: 'height',
    text: 'Altura(cm)',
}]

export class Cadastros extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            date: ""
        };
    }
    
    componentDidMount() {  
        if(this.props.currentUser){
            this.props.fetchMedidas(this.props.currentUser.id);  
        } 
          
    }
    
    onHeightChange(value){
        this.setState({
            height: value
        });
      }
    
    onWeightChange(value){
        this.setState({
            weight: value
        });
    }

    onDateChange(value){
        this.setState({
          date: value
        });
    }

    handleSubmit(event) {
        console.log('Submit', event); 
        
        event.preventDefault();
        this.props.fetchMedidasAlteradas(this.props.currentUser.id, {user_id: this.props.currentUser.id, height: this.state.height, weight: this.state.weight, date: this.state.date})
        .then(() => {
            this.props.fetchMedidas(this.props.currentUser.id);
        })
    }

    validateMeasure(row, column) {
    row[column.dataField] = parseInt(row[column.dataField], 10);
    try {
        this.props.fetchMedidasAlteradas(this.props.currentUser.id, {user_id: row.user_id, height: row.height, weight: row.weight, date: row.date})
        .then(() => {
            this.props.fetchMedidas(this.props.currentUser.id);
        })
    } catch (err) {
        console.error(err);
        alert('ENTRADA INVÁLIDA!');
    }
    }

    render() {
    return (
        <div>
            {console.log(this.props)}
        <BootstrapTable
        keyField="id"
        data={ this.props.measureDatas }
        columns={ columns }
        cellEdit={ cellEditFactory({ mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => { 
           
         }}) }
        pagination={ paginationFactory() }/>
         <form className="registros" onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="weight">Peso(Kg)</label>
            <input type="number" onChange={e => this.onHeightChange(e.target.value)} name="weight" id="weight" min="0" step="0.1"></input>
            <label htmlFor="height">Altura(cm)</label>
            <input type="number" onChange={e => this.onWeightChange(e.target.value)} name="height" id="height" min="0" step="0.1"></input>
            <label htmlFor="height">Data</label>
            <input type="date" onChange={e => this.onDateChange(e.target.value)} name="date" id="date"></input>
            <button>Salvar</button>
        </form>
        </div>
        );
    }
}

export default connect((store) => ({ 
    measureDatas: store.carteirinha.measureDatas,
    currentUser: store.carteirinha.currentUser,
    measureUpdateDatas: store.carteirinha.measureUpdateDatas
}), actions)(Cadastros);


