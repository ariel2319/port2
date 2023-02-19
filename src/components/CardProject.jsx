import React from 'react';
import '../styles/projects-style.css'

const CardProject = ({ title, description, img, url }) => {
  return (
    
      <a href={url} target={'_blank'} className="card-proj">

        <div className="card-img-proj">
          <img src={img} alt="" />
          <h3 className='card-title-proj'> {title} </h3>
        </div>

        <div className="card-content-proj">
          {description}
        </div>

      </a>

  );
};

export default CardProject;