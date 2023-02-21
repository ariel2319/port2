import React from 'react';
import fotito from '../../public/foto-portafolio.png';

const AboutMe = () => {
  return (
    <div className='about container' id='about'>
      <div>
        <h2 className='subtitle'> SOBRE MI</h2>
      </div>
      <div className="about-cont">
        <img src={fotito} alt="" className='fotuli' />
        <p align= "justify">
          Hola, soy Ariel! Un gusto conocerte! Soy un educador del sector mecánico y de matemática, al que le gusta la codificación de software como método de resolución de situaciones problemáticas. Hoy en día como desarrollador FULL STACK soy capaz de generar una interfaz de diseño agradable e intuitiva, al mismo tiempo que realizar un manejo confiable de los datos de la web.
          En mis años de experiencia como docente pude desarrollar capacidades de organización y desarrollo de contenidos. Adaptado al trabajo grupal, para desarrollar un mejor andamiaje en el trayecto de conseguir un objetivo en común. Aptitudes para la comunicación, la capacidad de interacción o creatividad. Capaz de liderar un grupo. Paciencia y observación, lo que es útil y necesario para detectar problemáticas en el proceso de desarrollo de una actividad. Empatía para comprender a las personas e identificar sus necesidades. Interés por el conocimiento, por la cultura. Estos intereses son capaces de abrir mentes y nuevas puertas al desarrollo de las personas. Con estas capacidades combinadas soy capaz de generar tu página web o mejorar/actualizar tu actual, realizar soporte de la misma y mejorar sus servicios.</p>
      </div>
    </div>
  );
};

export default AboutMe;