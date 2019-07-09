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
    this.setState({ 
        isOpen: !this.state.isOpen
      
      })
      console.log("this.setState")
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
          
              {this.state.isOpen ? 
                <div className="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Novo(a) usuário(a)</h5>
                      <button type="button" className="close" onClick={()=>this.isOpen()} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label for="recipient-name" className="col-form-label">Nome:</label>
                          <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        <div className="form-group">
                          <label for="recipient-name" className="col-form-label">Gênero:</label>
                          <input type="text" className="form-control" id="recipient-gender" />
                        </div>
                        <div className="form-group">
                          <label for="recipient-name" className="col-form-label">Data de nascimento:</label>
                          <input type="text" className="form-control" id="recipient-birthday" />
                        </div>
                        <div className="form-group">
                          <label for="recipient-name" className="col-form-label">Foto:</label>
                          <input type="file" className="form-control" id="recipient-photo" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" onClick={()=>this.isOpen()} className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                      <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                  </div>
                </div>
              </div> : null  
                }
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