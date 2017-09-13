import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import footlogo from '../../static/image/footlogo.png';
import '../../style/component/nav/footerwrapper.css';
class FooterWrapper extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {isSmall} = this.props;
    if(isSmall){
          this.mobileStyle.style.display = 'none';
    }else{
      this.mobileStyle.style.display = 'block';
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.isSmall){
      this.mobileStyle.style.display = 'none';
    } else {
      this.mobileStyle.style.display = 'block';
    }
    return true;
  }
  render(){
    return(
      <div className="footerWrapper">
        <div className="footer">

          <div className="footerqrcode" ref={elem => {this.mobileStyle = elem}}>
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
FooterWrapper.propTypes = {
  isSmall:PropTypes.bool.isRequired
}
export default FooterWrapper;
