import React from 'react';
import CardProject from './CardProject';
import comerceR from '../../public/projects/e-commerceReact.png';
import comerceH from '../../public/projects/e-commerce-JS-HTML-CSS.png';
import pokedex from '../../public/projects/pokedex.png';
import shadow from '../../public/projects/box-shadow.png';
import weather from '../../public/projects/weather.png';
import quotes from '../../public/projects/101-quotes.png';

const Projects = () => {
  return (
    <div className='container' id='projects'>
      <h2 className='subtitle'> PROYECTOS </h2>

      <div className='projects'>

        <CardProject
          title={'E-commerce'}
          description={'E-commerce realizado utilizando ReactJs, React Router para rutas protegidas, React Hook Form'}
          img={comerceR}
          url={'https://e6-e-commerce-maldonadoaa.netlify.app/'}
        />

        <CardProject
          title={'Pokedex'}
          description={'App que simula el funcionamiento de una Pokédex, de la serie Pokémon, donde podemos buscarlos por Nombre y ver sus características. Utilizando ReactJS, React Router.'}
          img={pokedex}
          url={'https://e5-pokedex-maldonadoaa.netlify.app/'}
        />


        <CardProject
          title={'Weather'}
          description={'Aplicación Web que nos permite ver información de la localización donde es ejecutada. Utilizando ReactJS y consumo de API'}
          img={weather}
          url={'https://e2-weather-arry.netlify.app/'}
        />

        <CardProject
          title={'Box-Shadow Generator'}
          description={'Una web que brinda la posibilidad de emular la sombra generada por la propiedad Box Shadow. Utilizando propiedades de '}
          img={shadow}
          url={'https://maldonadoaa-boxshados-generator.netlify.app/'}
        />

        <CardProject
          title={'Quotes'}
          description={'Es una web que nos muestra aleatoreamente citas de grandes autores. Utilizando consumo de API'}
          img={quotes}
          url={'https://e1-101inspirationalquotes-maldonado.netlify.app/'}
        />

        <CardProject
          title={'E-commerce JS'}
          description={'E-commerce realizado utilizando JS, HTML y CSS'}
          img={comerceH}
          url={'https://e-commerce-lapalanca-aam.netlify.app/'}
        />

      </div>



    </div>
  );
};

export default Projects;