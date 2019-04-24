import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import myEventsList from './events.js'
import '../styles/react-big-calendar.scss';
import Agenda from './customAgenda'

moment.locale('pt-br')
const localizer = BigCalendar.momentLocalizer(moment)
const messages = {
    allDay: 'Dia inteiro',
    previous: 'Anterior',
    next: 'Próximo',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
    date: 'Data',
    time: 'Hora',
    event: 'Evento',
    myweek: 'Eventos',
    showMore: total => `+ ${total} evento(s) adicionais(s)`
  };
export default class Calendar extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }
        render(){

        return(
        <div className='agenda'>
            <BigCalendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            messages={messages}
            views={{
                month: true,
                'myweek': Agenda,
              }}
            />
        </div>)
  }
}