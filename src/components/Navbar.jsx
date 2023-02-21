import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="navbar">
      <div className="nav_logo">
        Ariel Maldonado
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="#home" onClick={() => setIsOpen(!isOpen)}> <i className="fa-sharp fa-solid fa-house"></i> Inicio</a>
        <a href="#about" onClick={() => setIsOpen(!isOpen)}><i className="fa-regular fa-user"></i> Acerca de mi</a>
        <a href="#skills" onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-list-check"></i> Habilidades</a>
        <a href="#projects" onClick={() => setIsOpen(!isOpen)}><i className="fa-solid fa-diagram-project"></i> Proyectos</a>
        <a href="#contact" onClick={() => setIsOpen(!isOpen)}><i className="fa-regular fa-envelope"></i> Contacto</a>
        <div className='nav-social'>
          <div className='social-media' onClick={() => setIsOpen(!isOpen)}>
            <abbr title="Linkedin">
              <a href="https://www.linkedin.com/in/ariel-alejandro-maldonado-68276224b/" target={'_blank'} className='social-media-icon'>
                <i className='bx bxl-linkedin' ></i>
              </a>
            </abbr>
          </div>
          <div className='social-media' onClick={() => setIsOpen(!isOpen)}>
            <abbr title="Git Hub">
              <a href="https://github.com/ariel2319" target={'_blank'} className='social-media-icon'>
                <i className='bx bxl-github' ></i>
              </a>
            </abbr>
          </div>
          <div className='social-media' onClick={() => setIsOpen(!isOpen)}>
            <abbr title="CV">
              <a href="https://drive.google.com/file/d/1TwXGwlmLz1_jLuiG79S0GYlExSR4ESyL/view" target={'_blank'} className='social-media-icon'>
                <i className='bx bx-id-card'></i>
              </a>
            </abbr>
          </div>
        </div>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}  >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;