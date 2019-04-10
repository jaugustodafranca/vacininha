import React, { Component } from 'react';

export default class Form extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }
        render(){
        return(
        <div>
            {/* FORMULÁRIO PARA ADIÇÃO DE PESO E ALTURA DA CRIANÇA */}
            <form>
                <label htmlFor="Weight">Peso(Kg)</label>
                <input></input>
            </form>
        </div>)
  }
}