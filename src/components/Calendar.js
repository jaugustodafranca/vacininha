import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import myEventsList from './events.js'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)

export default class Calendar extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }
        render(){
        return(
        <div>
            <BigCalendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            />
        </div>)
  }
}