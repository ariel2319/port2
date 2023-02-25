import React from 'react';
import Logo from './Logo';

const SocialMedia = () => {
  return (
    <div className='footer-container' id='social'>

      <div className="contact-us">
        <Logo />
        <p> Con el objetivo de cumplir tus sueños </p>
      </div>
      <div className='icons'>
        <div className='social-media'>
          <a href="https://www.linkedin.com/in/ariel-alejandro-maldonado-68276224b/" target={'_blank'} className='social-media-icon'>
            <i class='bx bxl-linkedin i2' ></i>
          </a>
        </div>
        <div className='social-media'>
          <a href="https://github.com/ariel2319" target={'_blank'} className='social-media-icon i2'>
            <i class='bx bxl-github' ></i>
          </a>
        </div>
        <div className='social-media'>
          <a href="https://docs.google.com/document/d/12jyQJqI8lo5VqC_VeA9iFCR5ZR_zT-UM/edit?usp=sharing&ouid=112512721761573156683&rtpof=true&sd=true" target={'_blank'} className='social-media-icon i2'>
            <i class='bx bx-id-card'></i>
          </a>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SocialMedia;