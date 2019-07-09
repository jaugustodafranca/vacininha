import React from 'react';
import logo from '../../images/vacininha.png';
import Card from '../../components/card'

// Redux
import { connect } from 'react-redux';
import * as actions from '../Carteirinha/actions';

class Carteiras extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
    };
  }

  componentDidMount(){
    this.props.fetchCarteirinhas();
  }

  changeUser(user){
    console.log(user)
    this.props.changeUser(user);
    this.props.history.push(`/carteirinha/`);
  }

  isOpen () {
    this.setState(
      {
        isOpen: !this.state.isOpen
      }
        
    )
  }

  render() {
    const users = [
      { 
        nome:'Usuário',
        male: true
      },
      {
        nome:'Usuária',
        male:false
      }
    ]
    const cards = (this.props.carteirinhasData || []).map(user=>{
      return (
        <Card changeUser={this.changeUser.bind(this)} {...user} />
      )
    });
    console.log(this.props.carteirinhasData)
    return(
      <React.Fragment>
        <div className="main-container">
            <div className="title">
                <img src={logo} alt="Logo vacininha"/>
                <h1>Vacininha</h1>
            </div>
            <div className=" carteirinha" >
                <div className="content">
                  <div className="display-cards"> 
                    { cards }
                  </div>
                  <div className="display-button">
                    <a onClick={()=>this.isOpen()} className='btn btn-primary' id='add-button'>Adicionar Carteira</a>
                  </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
 

export default connect((store) => ({ 
  carteirinhasData: store.carteirinha.carteirinhasData,
  loginIsSuccess: store.login.isSuccess,
  loginIsRecoverSuccess: store.login.isRecoverSuccess
}), actions)(Carteiras);