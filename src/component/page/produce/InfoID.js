import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';

import ErrorPage from '../ErrorPage.js';
class InfoID extends Component{
  componentDidMount(){
  
  }

  render(){
    return (
      <div ref={elem => {this.content = elem}}>
        {this.props.match.params.infoID}
      </div>
    )
  }
}
export default InfoID;
