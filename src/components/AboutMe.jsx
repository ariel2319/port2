import React from 'react';
import fotito from '../../public/foto-portafolio.png';

const AboutMe = () => {
  return (
    <div className='about container' id='about'>
      <div>
        <h2 className='subtitle'> SOBRE MI</h2>
      </div>
      <div className="about-cont">
        <img src={fotito} alt="asd" className='fotuli' />
        <p align="justify">
          Hola, soy Ariel! Un gusto conocerte!
          <br />  Soy un educador del sector mecánico y de matemática, al que le gusta la codificación de software como método de resolución de situaciones problemáticas. Hoy en día como desarrollador FULL STACK soy capaz de generar una interfaz de diseño agradable e intuitiva, al mismo tiempo que realizar un manejo confiable de los datos de la web.
          <br />
          En mis años de experiencia como docente pude desarrollar capacidades de organización y desarrollo de contenidos. Adaptado al trabajo grupal, para desarrollar un mejor andamiaje en el trayecto de conseguir un objetivo en común.  
          <br />
          Con estas capacidades combinadas soy capaz de generar tu página web o mejorar/actualizar tu actual, realizar soporte de la misma y mejorar sus servicios.</p>
      </div>
    </div>
  );
};

export default AboutMe;