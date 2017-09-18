import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';
import ComBrief from './ComBrief';
import ComNews from './ComNews';
import ErrorPage from '../ErrorPage.js';
class InfoID extends Component{

  render(){
    if(this.props.match.params.infoID == 'comBrief'){
      return <ComBrief />;
    } else if(this.props.match.params.infoID == 'comNews'){
      return <ComNews />;
    } else {
      return <ErrorPage />
    }

  }
}
export default InfoID;
