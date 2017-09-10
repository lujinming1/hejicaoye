import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';

class Produce extends Component{
  componentDidMount(){
    console.log('ssss');
  }
  render(){
    return (

      <div>
        <p>Produce</p>
      </div>
    );
  }
}
export default Produce;
