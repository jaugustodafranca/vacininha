import React, { Component } from 'react';
import bebe from '../../../images/bebe.png';
import moment from 'moment';
import { withTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Capa extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    handleClickLabel(label) {
        this.props.history.push(`/carteiras/`);
    }

    render() {

        const male_photo = 'https://firebasestorage.googleapis.com/v0/b/vacininha.appspot.com/o/homem.png?alt=media&token=7418e492-c1c4-4d15-a3c9-193a2d2211f4'
        const female_photo = 'https://firebasestorage.googleapis.com/v0/b/vacininha.appspot.com/o/mulher.png?alt=media&token=d566d01d-4681-4dbe-bcbb-06875fc0fb1e'
        var photo = male_photo;
        var idade = 0;
        var name = ""
        if(this.props.currentUser){
            name = this.props.currentUser.full_name;
            photo = (this.props.currentUser.photo_url && this.props.currentUser.photo_url!= "undefined" &&this.props.currentUser.photo_url != "")? this.props.currentUser.photo_url:(!this.props.currentUser.gender_male)? female_photo: male_photo;
            var diff = moment().diff(this.props.currentUser.birth_date, 'days');
            if(parseInt(diff+'') < 31){
                idade = diff + ` ${this.props.t("days")}`;
            }else if(parseInt(diff+'') < 365){
                idade = moment().diff(this.props.currentUser.birth_date, 'months') + ` ${this.props.t("months")}`;
            }else{
                idade = moment().diff(this.props.currentUser.birth_date, 'years') + ` ${this.props.t("years")}`;
            }
        }

        return (

            <div className="capa">
            {this.props.isFetching.carteirinhas ?
                <div className="spinner"></div>
                    :
                <React.Fragment>
                    <h3>{name}</h3>
                    <p>{idade}</p>
                    <img src={photo} />
                    <div className="change-button">
                        <a onClick={()=>this.handleClickLabel()} className='btn btn-primary' >{this.props.t("changeCard")}</a>
                    </div>
                </React.Fragment>
                }
            </div>
            );
    }
}
export default connect((store) => ({
    currentUser: store.carteirinha.currentUser,
    isFetching: store.carteirinha.isFetching
  }), actions)(withTranslation()(Capa));
