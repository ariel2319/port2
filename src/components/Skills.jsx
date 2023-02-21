import React from 'react';
import '../styles/skills-style.css'
import js from '../../public/technology/JS.png'
import html from '../../public/technology/html.svg'
import react from '../../public/technology/react.svg'
import redux from '../../public/technology/redux.svg'
import router from '../../public/technology/router.svg'
import git from '../../public/technology/git.svg'
import github from '../../public/technology/github.svg'
import bootstrap from '../../public/technology/bootstrap.svg'
import node from '../../public/technology/nodejs.png'
import express from '../../public/technology/express.png'

//const cardImages = require.context('../assets/technology', true)

const Skills = () => {
  return (
    <div className='container' id='skills'>
      <h2 className='subtitle'> Habilidades </h2>
      <h3 className='sub-title'> Resumen Académico </h3>
      <ul>

        <li>
          <h4 className='title-h4'><span className='point-span'>📌</span><a href="https://certificates.academlo.com/en/verify/39296980516484" target={'_blank'}> Desarrollador WEB FULL STACK</a></h4>
          <p>Institución: <b> ACADEMLO </b></p>
        </li><br></br>

        <li>
          <h4 className='title-h4'><span className='point-span'> 📌</span> <a href="https://certificates.academlo.com/en/verify/28934805167606" target={'_blank'}>   Desarrollador BACK END</a></h4>
          <p>Institución: <b> ACADEMLO </b> </p>
        </li><br></br>

        <li>
          <h4 className='title-h4'><span className='point-span'> 📌</span><a href="https://certificates.academlo.com/en/verify/32616498903202" target={'_blank'}> Desarrollador FRONT END</a></h4>
          <p>Institución: <b> ACADEMLO </b></p>
        </li><br></br>

        <li>
          <h4 className='title-h4'><span className='point-span'>📌 </span> <a href="https://certificates.academlo.com/en/verify/87979266497188" target={'_blank'}>Fundamento en HTML, CSS and JavaScript</a></h4>
          <p>Institución: <b> ACADEMLO </b></p>
        </li><br></br>

        <li>
          <h4 className='title-h4'><span className='point-span'>📌 </span> <a>Profesorado para Técnicos en Base al Título de Procedencia <br /> (en proceso) </a> </h4>
          <p>Institución: <b> IES 9-007 </b></p>
        </li><br></br>

      </ul>



      <h3 className='sub-title'> Tecnologías </h3>
      <div className='technology-container'>

        <div className='card js'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img
              src={js}
              alt={"JS"}
              onClick={() => scrollToTop()}
            />
          </div>
          <h5>Java Script</h5>
        </div>

        <div href="" className='card html'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={html} alt="" />
          </div>
          <h5>HTML 5</h5>
        </div>

        <div href="" className='card css'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png" alt="" />
          </div>
          <h5>CSS</h5>
        </div>

        <div href="" className='card react'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={react} alt="" />
          </div>
          <h5>React</h5>
        </div>

        <div href="" className='card redux'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={redux} alt="" />
          </div>
          <h5>Redux</h5>
        </div>

        <div href="" className='card router'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={router} alt="" />
          </div>
          <h5>Router</h5>
        </div>

        <div href="" className='card git'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={git} alt="" />
          </div>
          <h5>Git</h5>
        </div>

        <div href="" className='card bs'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={bootstrap} alt="" />
          </div>
          <h5>BootStrap</h5>
        </div>

        <div href="" className='card github'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={github} alt="" />
          </div>
          <h5>Git Hub</h5>
        </div>

        <div href="" className='card node'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={node} alt="" />
          </div>
          <h5>Node JS</h5>
        </div>

        <div href="" className='card express'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src={express} alt="" />
          </div>
          <h5>Express JS</h5>
        </div>

      </div>
    </div>
  );
};

export default Skills;