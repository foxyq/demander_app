import React from 'react';
import { Carousel } from 'antd';

class HomeCover extends React.Component {
  render() {
    return(
    <div>
      <Carousel effect="fade">
        <div style={{backgroundColor:"#777777"}}><h3>1<br/><br/><br/><br/></h3></div>
        <div><h3>2<br/><br/><br/><br/></h3></div>
        <div><h3>3<br/><br/><br/><br/></h3></div>
        <div><h3>4<br/><br/><br/><br/></h3></div>
      </Carousel>
    </div>

    );
  }
}

export default HomeCover;
