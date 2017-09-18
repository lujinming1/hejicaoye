import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';
import About from './About';
import Job from './Job';
import ErrorPage from '../ErrorPage.js';
class InfoID extends Component{

  render(){
    if(this.props.match.params.infoID == 'about'){
      return <About />;
    } else if(this.props.match.params.infoID == 'job'){
      return <Job />;
    } else {
      return <ErrorPage />
    }

  }
}
export default InfoID;
