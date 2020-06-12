import React from 'react';

import bannerImage from '../../assets/images/banner1.jpg';
import '../../assets/css/cr.css';

export default () => {
    return(
      <div class='banner-container'>
        <img className="banner" src={bannerImage} />
      </div>
    );
}
