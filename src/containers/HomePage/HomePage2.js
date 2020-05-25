import React from "react";
import  "../../assets/css/cr.css";
import  "../../assets/css/HomePage.css"
import lake5x5 from '../../assets/images/5x5_lake.jpg';
import mountain3x5 from '../../assets/images/3x5.jpg';
import river5x3 from '../../assets/images/5x3.jpg';

class HomePage2 extends React.Component {
render() {
return (

  <div class="wrapper">
    <div class="i1">
      <figure>
        <img  className = 'imgFrontPage' src={lake5x5}  alt="no image"/>
        <figcaption><i>Purple Lake Sunset</i></figcaption>
      </figure>
    </div>
    <div class="i2">
      <figure>
        <img  className = 'imgFrontPage' src={river5x3}  alt="no image"/>
        <figcaption><i>Evolution Valley Ahead...</i></figcaption>
      </figure>
    </div>
    <div class="i3">
      <figure>
        <img  className = 'imgFrontPage' src={mountain3x5}  alt="no image"/>
        <figcaption><i>Minarets</i></figcaption>
      </figure></div>
    <div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>


  </div>


);
}}

export default HomePage2
