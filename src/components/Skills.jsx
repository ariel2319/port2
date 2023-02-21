import React from 'react';
import '../styles/skills-style.css'
import js from '../../public/technology/JS.png'

//const cardImages = require.context('../assets/technology', true)

const Skills = () => {
  return (
    <div className='container' id='skills'>
      <h2 className='subtitle'> Habilidades </h2>
      <h3 className='sub-title'> Resumen Académico </h3>
      <ul>

        <li>
          <h4 className='title-h4'><span className='point-span'>📌</span><a href={js} target={'_blank'}> Desarrollador WEB FULL STACK</a></h4>
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
              src={'../../public/technology/javascript.svg'}
              alt={"JS"}
            />
          </div>
          <h5>Java Script</h5>
        </div>

        <div href="" className='card html'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/html.svg" alt="" />
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
            <img src="../../public/technology/react.svg" alt="" />
          </div>
          <h5>React</h5>
        </div>

        <div href="" className='card redux'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/redux.svg" alt="" />
          </div>
          <h5>Redux</h5>
        </div>

        <div href="" className='card router'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/router.svg" alt="" />
          </div>
          <h5>Router</h5>
        </div>

        <div href="" className='card git'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/git.svg" alt="" />
          </div>
          <h5>Git</h5>
        </div>

        <div href="" className='card bs'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/bootstrap.svg" alt="" />
          </div>
          <h5>BootStrap</h5>
        </div>

        <div href="" className='card github'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/github.svg" alt="" />
          </div>
          <h5>Git Hub</h5>
        </div>

        <div href="" className='card node'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/nodejs.png" alt="" />
          </div>
          <h5>Node JS</h5>
        </div>

        <div href="" className='card express'>
          <div className='cor__cobertura'></div>
          <div className='circulo'>
            <img src="../../public/technology/express.png" alt="" />
          </div>
          <h5>Express JS</h5>
        </div>

      </div>
    </div>
  );
};

export default Skills;