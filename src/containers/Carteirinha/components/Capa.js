import React, { Component } from 'react';
import bebe from '../../../images/bebe.png';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Capa extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        if(!this.props.currentUser){
            this.props.history.push(`/carteiras`);
        }
    }


    render() {

        const male_photo = 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png'
        const female_photo = 'https://www.grupoconduzir.com.br/wp-content/uploads/2017/10/avatar-pessoa-mulher.png'
        var photo = male_photo;
        var idade = 0;
        var name = ""
        if(this.props.currentUser){
            name = this.props.currentUser.full_name;
            photo = (this.props.currentUser.photo_url && this.props.currentUser.photo_url != "")? this.props.currentUser.photo_url:(!this.props.currentUser.gender_male)? female_photo: male_photo;
            var diff = moment().diff(this.props.currentUser.birth_date, 'days');
            if(parseInt(diff+'') < 31){
                idade = diff + "days";
            }else if(parseInt(diff+'') < 365){
                idade = moment().diff(this.props.currentUser.birth_date, 'months') + " Meses";
            }else{
                idade = moment().diff(this.props.currentUser.birth_date, 'years') + " Anos";
            }
        }

        return (
            <div className="capa">
                <h3>{name}</h3>
                <p>{idade}</p>
                <img src={photo} />
            </div>
            );
    }
}
export default connect((store) => ({ 
    currentUser: store.carteirinha.currentUser,
  }), actions)(Capa);
