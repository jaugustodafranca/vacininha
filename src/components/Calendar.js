import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import myEventsList from './events.js'
import '../styles/react-big-calendar.scss';
import Agenda from './customAgenda'

import { withTranslation } from 'react-i18next';

class Calendar extends Component {

  constructor(props){
      super(props);
      this.state = {
        parsedData: []
      };
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    if(this.props.data != prevProps.data){
      var parsed = (this.props.data || []).map((row, index) =>{
        var obj = {
          id: index,
          title: row.name,
          vaccine_id: row.vaccine_id,
          allDay: true,
          start: moment(row.vaccine_date).utc(false),
          end: moment(row.vaccine_date).utc(false),
          status: row.has_applied,
        }
        return obj;
      })
      this.setState({parsedData:parsed})
      return null;
    }

  }
  render(){

    const language = this.props.i18n.language === 'pt' ? 'pt-br' : 'en-US'
    moment.locale(language)
    const localizer = BigCalendar.momentLocalizer(moment)
    const { t } = this.props
    const messages = {
        allDay:  t("allDay"),
        previous: t("previous"),
        next: t("next"),
        today: t("today"),
        month: t("month"),
        week: t("week"),
        day: t("day"),
        agenda: "Agenda",
        date: t("date"),
        time: t("time"),
        event: t("event"),
        myweek: t("myweek"),
        showMore: total => `+ ${total} ${t('eventsAdded')}`
      };

    return(
      <div className='agenda'>
          <BigCalendar
          localizer={localizer}
          events={this.state.parsedData}
          defaultView={"myweek"}
          startAccessor="start"
          endAccessor="end"
          alterVaccineState={this.props.alterVaccineState.bind(this)}
          messages={messages}
          views={{
              month: true,
              'myweek': Agenda,
            }}
          />
          {this.props.isFetching?
            <div className="spinner"></div>:null
          }
      </div>
    )
  }
}

export default withTranslation()(Calendar)
