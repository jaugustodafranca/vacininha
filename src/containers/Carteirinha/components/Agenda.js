import React, { Component } from 'react';
import Calendar from '../../../components/Calendar'

export default class Agenda extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }


    render() {
    return (
        <div>
            <p>Agenda</p>
            <Calendar/>
        </div>
        );
    }
}
