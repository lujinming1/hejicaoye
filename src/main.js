import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TopWrapper from './component/nav/TopWrapper.js';
import FooterWrapper from './component/nav/FooterWrapper.js';
import {smallScreenIfNeeded} from './redux/action/screenAction';

class Wrapper extends Component {

  constructor(props){
    super(props);
    this.handleWidth = this.handleWidth.bind(this);
  }

  handleWidth(){
    const {dispatch} = this.props;
    let curScreen = document.documentElement.clientWidth < 700 ? true : false;
    dispatch(smallScreenIfNeeded(curScreen));
  }


  componentDidMount(){
    const {dispatch} = this.props;
    let curScreen = document.documentElement.clientWidth < 700 ? true : false;
    dispatch(smallScreenIfNeeded(curScreen));

    window.addEventListener('resize',this.handleWidth);

  }



  render() {
    const {screen,toAdmin} = this.props;
    return toAdmin ? null :(
        <div className='router_div'>
          <TopWrapper isSmall = {screen.isSmall}/>
          <FooterWrapper isSmall = {screen.isSmall}/>
       </div>
    );
  }
}
Wrapper.propTypes = {
  screen: PropTypes.object.isRequired,
  toAdmin: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  let {screen,toAdmin} = state;
  return {
    screen,
    toAdmin
  }
}
const Main = connect(mapStateToProps)(Wrapper);
export default Main;
