import React from 'react';

const SocialMedia = () => {
  return (
    <div className='footer-container' id='social'>

      <div className="contact-us">
        <img src="" alt="" />
        <h2 className='brand'> Ariel Maldonado </h2>
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
          <a href="https://drive.google.com/file/d/1w5StUI8HLsZ2e256OLzgvTWi5EPlO9Ez/view" target={'_blank'} className='social-media-icon i2'>
            <i class='bx bx-id-card'></i>
          </a>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default SocialMedia;