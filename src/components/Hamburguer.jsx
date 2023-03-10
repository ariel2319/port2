import React, { useState } from 'react';

const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img src="../../public/menu-hamburguer.svg" alt="" class='hamburguer hamb2' />

      <nav className='nav-menu'>
        <a href="#home"> <i className="fa-sharp fa-solid fa-house"></i> Inicio</a>
        <a href="#about"><i className="fa-regular fa-user"></i> Acerca de mi</a>
        <a href="#skills"><i className="fa-solid fa-list-check"></i> Habilidades</a>
        <a href="#projects"><i className="fa-solid fa-diagram-project"></i> Proyectos</a>
        <a href="#contact"><i className="fa-regular fa-envelope"></i> Contacto</a>
        <div className='nav-social'>
          <div className='social-media'>
            <abbr title="Linkedin">
              <a href="https://www.linkedin.com/in/ariel-alejandro-maldonado-68276224b/" target={'_blank'} className='social-media-icon'>
                <i className='bx bxl-linkedin' ></i>
              </a>
            </abbr>
          </div>
          <div className='social-media'>
            <abbr title="Git Hub">
              <a href="https://github.com/ariel2319" target={'_blank'} className='social-media-icon'>
                <i className='bx bxl-github' ></i>
              </a>
            </abbr>
          </div>
          <div className='social-media'>
            <abbr title="CV">
              <a href="https://drive.google.com/file/d/1TwXGwlmLz1_jLuiG79S0GYlExSR4ESyL/view" target={'_blank'} className='social-media-icon'>
                <i className='bx bx-id-card'></i>
              </a>
            </abbr>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hamburguer;