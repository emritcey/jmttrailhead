import React, {Component } from 'react';
import bimage from '../images/banner1.jpg';
import './mycomponents.css';

export default () => {
    return(
        <div>
            <img className = "Bannerimagetag"  src={bimage} />
        </div>
    );
}
