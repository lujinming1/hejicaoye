import React, {Component} from 'react';
import {
       BrowserRouter as Router,
       Route,
       Link
     } from 'react-router-dom';
import img from '../../static/image/home1.jpg';
class Home extends Component{
  render(){
    return (
      <div style={{height:'100%'}}>
        <img style={{width: '100%',height:'100%'}} src={img}/>
      </div>
    );
  }
}
export default Home;
