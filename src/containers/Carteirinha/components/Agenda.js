import React, { Component } from 'react';
import Calendar from '../../../components/Calendar';

// Redux
import { connect } from 'react-redux';
import * as actions from './../actions';
import moment from 'moment';

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

    alterVaccineState(row){
        var body = {
            user_id: this.props.currentUser.id,
            date: moment(),
            vaccine_id : row.vaccine_id,
        }
        this.props.changeVaccine(body).then(() => {
            this.props.fetchVaccines(body.user_id);
        });
        console.log(row)
    }

    render() {

    console.log(this.props.vaccinesData);
    return (
        <div>
            <p>Agenda</p>
            <Calendar alterVaccineState={this.alterVaccineState.bind(this)} data={this.props.vaccinesData}/>
        </div>
        );
    }
    
}
export default connect((store) => ({ 
    currentUser: store.carteirinha.currentUser,
    vaccinesData: store.carteirinha.vaccinesData
}), actions)(Agenda);
