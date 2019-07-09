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
        this.state = {};
    }
    
    componentDidMount() {
        // GET Table 
        this.props.fetchMedidas();    
    }
    
    handleSubmit(event) {
        console.log('Submit'); 
        event.preventDefault();
    }
    

    render() {
    return (
        <div>
            {console.log(this.props)}
        <BootstrapTable
        keyField="id"
        data={ this.props.measureDatas }
        columns={ columns }
        cellEdit={ cellEditFactory({ mode: 'click' }) }
        pagination={ paginationFactory() }/>
         <form className="registros" onSubmit={this.handleSubmit}>
            <label htmlFor="weight">Peso(Kg)</label>
            <input type="number" name="weight" id="weight" min="0" step="0.1"></input>
            <label htmlFor="height">Altura(cm)</label>
            <input type="number" name="height" id="height" min="0" step="0.1"></input>
            <button>Salvar</button>
        </form>
        </div>
        );
    }
}

export default connect((store) => ({ 
    measureDatas: store.carteirinha.measureDatas,
}), actions)(Cadastros);


