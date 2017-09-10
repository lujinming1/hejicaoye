import React, {Component} from 'react';
import error_404 from '../../static/image/404.gif';
import '../../style/component/page/error.css';

class ErrorPage extends Component {

  render(){
    return (
      <div className='error'>
        <img src= {error_404}/>
      </div>
    )
  }
}
export default ErrorPage;
