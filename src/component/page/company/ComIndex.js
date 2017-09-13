import React, {Component} from 'react';

import ComBrief from './ComBrief';
import ComNews from './ComNews';

class ComIndex extends Component {

  render(){

    return (
      <div style={{height:'100%'}}>
        <ComBrief />
        <ComNews />
      </div>
    );
  }
}

export default ComIndex;
