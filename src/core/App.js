import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import usaFlag from '../images/united-states.png';
import brFlag from '../images/brazil.png';
import ChildRoutes from './ChildRoutes';
import baseRoutes from './routes';
import store from './store';
import { useTranslation } from 'react-i18next';



const App = (props) => {
const { i18n } = useTranslation();

    const basename = document.querySelector('base') ? document.querySelector('base').getAttribute('href') : null;

    const handleLanguageChangePt = () => {
      i18n.changeLanguage("pt")
    }

    const handleLanguageChangeEn = () => {
      i18n.changeLanguage("en")
    }

    return (
      <Provider store={store}>
        <div className="main-container">
          <div className="select-languages">
            <button type='button' onClick={handleLanguageChangeEn}>
              <img alt='USA' src={usaFlag}></img>
            </button>
            <button type='button' onClick={handleLanguageChangePt}>
              <img alt='BR' src={brFlag}></img>
            </button>
          </div>
        <Router basename={basename || ''}>
          <ChildRoutes {...props} routes={baseRoutes}/>
        </Router>
        </div>
      </Provider>
    );

}


let exportedApp = App;

export default exportedApp;
