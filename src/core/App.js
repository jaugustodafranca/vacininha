import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';


import '../styles/App.css';
import ChildRoutes from './ChildRoutes';
import baseRoutes from './routes';
import store from './store';


const App = (props) => {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <ChildRoutes {...props} routes={baseRoutes}/>
        </Router>
      </Provider>
    );
  
}


let exportedApp = App;

// Use hot loader only in development
if (process.env.NODE_ENV !== 'production') exportedApp = hot(module)(App);

export default exportedApp;
