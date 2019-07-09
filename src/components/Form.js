import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const columns = [{
    dataField: 'weight',
    text: 'Peso(Kg)'
}, {
    dataField: 'height',
    text: 'Altura(cm)'
}]

export default class Form extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            values: [{id: '1', weight:'10', height: '30'}, {id: '2', weight:'20', height: '60'}]
        };
    }

    // componentDidMount() {
    //     // GET Table 
    //     // fetch()
    // }
    
    handleSubmit(event) {
        console.log('Submit'); 
        event.preventDefault();
    }
    
    render(){
        return(
            <div>
            <BootstrapTable
            keyField="id"
            data={ this.state.values }
            columns={ columns }
            cellEdit={ cellEditFactory({ mode: 'click' }) }/>
             <form className="registros" onSubmit={this.handleSubmit}>
                <label htmlFor="weight">Peso(Kg)</label>
                <input type="number" name="weight" id="weight" min="0" step="0.1"></input>
                <label htmlFor="height">Altura(cm)</label>
                <input type="number" name="height" id="height" min="0" step="0.1"></input>
                <button>Salvar</button>
            </form>
            </div>)
        }       
    }