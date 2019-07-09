import React, { Component } from 'react';
import Calendar from '../../../components/Calendar';

// Redux
import { connect } from 'react-redux';
import * as actions from './../actions';

export class Agenda extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        if(this.props.currentUser){
            this.props.fetchVaccines(this.props.currentUser.id);
        }
    }


    render() {

    console.log(this.props.vaccinesData);
    return (
        <div>
            <p>Agenda</p>
            <Calendar data={this.props.vaccinesData}/>
        </div>
        );
    }
    
}
export default connect((store) => ({ 
    currentUser: store.carteirinha.currentUser,
    vaccinesData: store.carteirinha.vaccinesData
}), actions)(Agenda);
