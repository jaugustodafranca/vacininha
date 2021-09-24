import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { connect } from 'react-redux';
import moment from 'moment';
import { withTranslation } from 'react-i18next';

import * as actions from './../actions';

const convertKgToPounds = (weight) => {
    return (Number(weight) * 2.20462262).toFixed(2)
}

const convertPoundsToKg = (weight) => {
    return (weight * 0.45359237)
}

const convertFeetToCm = (height)=> {
    return height * 30.48
}

const convertCmToFeat = (height) => {
    const realFeet = ((height*0.393700) / 12);
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return { feet, inches };
}

const dateFormatter = (t, date) => {
    if(!date){
        return " - "
    }
    return t('formatDate',{
        date: moment(date).utc(false).toDate()
    })
}

const weightFormatter = (language, weight) => {
    if(language === "en"){
        return convertKgToPounds(weight)
    }
    return weight
}

const heightFormatter = ( language, height) => {
    if(language === "en"){
        const { feet, inches } = convertCmToFeat(height)
        return feet + "ft " + inches + 'in';
    }

    return height
}

const defaultSorted = [{
    dataField: 'date',
    order: 'desc' // desc or asc
  }];
export class Cadastros extends Component {

    constructor(props){
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            date: ""
        };
    }

    componentDidMount() {
        if(this.props.currentUser){
            this.props.fetchMedidas(this.props.currentUser.id);
        }
    }

    getSnapshotBeforeUpdate(prevProps){
        if(JSON.stringify(this.props.currentUser) != JSON.stringify(prevProps.currentUser)){
            this.props.fetchMedidas(this.props.currentUser.id);
        }
    }

    onHeightChange(value){
        this.setState({
            height: value
        });
      }

    onWeightChange(value){
        this.setState({
            weight: value
        });
    }

    onDateChange(value){
        this.setState({
          date: value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        const isEnglish = this.props.i18n.language === 'en'

        this.props.fetchMedidasAlteradas(this.props.currentUser.id, {
            user_id: this.props.currentUser.id,
            weight: isEnglish ? convertFeetToCm(this.state.height): this.state.height,
            height: isEnglish ? convertPoundsToKg(this.state.weight) :this.state.weight,
            date: this.state.date
            })
        .then(() => {
            this.props.fetchMedidas(this.props.currentUser.id);
        })
    }

    validateMeasure(row, column) {
    row[column.dataField] = parseInt(row[column.dataField], 10);
    try {
        this.props.fetchMedidasAlteradas(this.props.currentUser.id, {user_id: row.user_id, height: row.height, weight: row.weight, date: row.date})
        .then(() => {
            this.props.fetchMedidas(this.props.currentUser.id);
        })
    } catch (err) {
        console.error(err);
        alert('ENTRADA INVÁLIDA!');
    }
    }

    render() {
    const { t,i18n } = this.props
    const columns = [{
        dataField: 'date',
        text: t('date'),
        sort: true,
        formatter: (...params) => dateFormatter(this.props.t, ...params),
        sortFunc: (a, b, order, dataField, rowA, rowB) => {
            if (order === 'asc') {
                return moment(b).unix() - moment(a).unix();
            }
            return moment(a).unix() - moment(b).unix(); // desc
        },
    },{
        dataField: 'weight',
        text: t('weight'),
        formatter: (...params) => weightFormatter(i18n.language, ...params),
    }, {
        dataField: 'height',
        text: t('height'),
        formatter: (...params) => heightFormatter(i18n.language, ...params),
    }]

    return (
        <div>
        <BootstrapTable
        keyField="date"
        key={i18n.language}
        data={ this.props.measureDatas }
        defaultSorted={ defaultSorted }
        columns={ columns }
        cellEdit={ cellEditFactory({ mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => {

         }}) }
        pagination={ paginationFactory() }/>
         <form className="registros" onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="weight">{t('weight')}</label>
            <input type="number" onChange={e => this.onWeightChange(e.target.value)} name="weight" id="weight" min="0" step="0.1"></input>
            <label htmlFor="height">{t('height')}</label>
            <input type="number" onChange={e => this.onHeightChange(e.target.value)} name="height" id="height" min="0" step="0.1"></input>
            <label htmlFor="height">{t('date')}</label>
            <input type="date" onChange={e => this.onDateChange(e.target.value)} name="date" id="date"></input>
            <button>{t('save')}</button>
        </form>
        </div>
        );
    }
}

export default connect((store) => ({
    measureDatas: store.carteirinha.measureDatas,
    currentUser: store.carteirinha.currentUser,
    measureUpdateDatas: store.carteirinha.measureUpdateDatas,
    isFetching: store.carteirinha.isFetching
}), actions)(withTranslation()(Cadastros));


