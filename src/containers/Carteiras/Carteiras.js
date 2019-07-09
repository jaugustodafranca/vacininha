import React from 'react';
import logo from '../../images/vacininha.png';
import Card from '../../components/card'

class Carteiras extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
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
    const cards = (users || []).map(user=>{
      return (
        <Card {...user} />
      )
    });
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
                    <a href="#" className='btn btn-primary' id='add-button'>Adicionar Carteira</a>
                  </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Carteiras;
