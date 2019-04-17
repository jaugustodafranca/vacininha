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
            <form className="registros">
                <label htmlFor="weight">Peso(Kg)</label>
                <input type="number" name="weight" id="weight"></input>
                <label htmlFor="height">Altura(cm)</label>
                <input type="number" name="height" id="height"></input>
                <button>Adicionar novo registro</button>
            </form>
        </div>)
  }
}