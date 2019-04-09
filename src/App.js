import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Carteirinha from './containers/Carteirinha';

import ChildRoutes from 'utils/ChildRoutes';
import baseRoutes from 'core/baseRoutes';
import store from 'core/store';

class App extends Component {
  render() {
    return (
      <Carteirinha />
      
    );
  }
}

export default App;
