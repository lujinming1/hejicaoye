import React, { Component } from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

import Topwapper from './component/nav/Topwapper.js';




const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div className='router-div'>
            <Topwapper />
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
