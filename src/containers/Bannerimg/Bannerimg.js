
import bimage from '../../assets/images/banner1.jpg';
import '../../assets/css/cr.css';
import React, {Component } from 'react';

class Bannerimg extends React.Component {
render() {
    return(
    <div>
        <img className = "banner" src={bimage} />
    </div>
          );
        }
}
export default Bannerimg;
