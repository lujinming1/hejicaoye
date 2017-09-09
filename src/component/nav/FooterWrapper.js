import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import footlogo from '../../static/image/footlogo.png';
import '../../style/component/nav/footerwrapper.css';
class FooterWrapper extends Component{

  render(){
    return(
      <div className="footerWrapper">
        <div className="footer">

          <div className="footerqrcode">
            <img src={footlogo} className="qrcode" alt="qr_code"/>
          </div>
          <hr />
          <div className="copyright">
            <span className="text">
              版权公告  ©2017 甘肃禾吉草业有限公司 版权所有。
            </span>
          </div>
        </div>
      </div>

    );
  }
}

export default FooterWrapper;
