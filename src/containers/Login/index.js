import React, { Component } from 'react';
import logo from '../../images/vacininha.png';
// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseui from 'react-firebaseui';
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyAIiLAT3FskK6XmULSw_213ydLgvESO0-g',
  authDomain: 'vacininha.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  'credentialHelper': 'none',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/carteirinha',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

export default class Login extends Component {
  
    constructor(props){
        super(props);
        this.state = {};
    }

    handleLogin() {
        this.props.history.push(`/carteirinha`);
    }

    render() {
    return (
        <React.Fragment>
        <a onClick={() => this.handleLogin()}>Login</a>
        <div className="main-home">
            <div className="home-left">
                <img src={logo} />
                <div className="home-texto">
                    <h1>O que é a Vacininha?</h1>
                    <p>Além de informar todas as datas de vacinação,
                       a Vacininha também faz o acompanhamento do 
                       crescimento do seu filho (peso e altura).
                       O melhor é que tudo fica disponível na plataforma
                       para você acessar de onde e quando você quiser!
                    </p>   
                </div>
            </div>
            <div className="home-right">
                <div className="botoes-login">
                    <span id="titulo">Acesse já:</span>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                </div>
            </div>
        </div>
        </React.Fragment>
        );
    }
}