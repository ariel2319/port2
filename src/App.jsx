import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialMedia from './components/SocialMedia'
import './styles/style.css'

import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';
import Bubble from './components/Bubble'


function App() {

  return (
    <div className='header'>
      <Fragment>
        <div >
          <Navbar />
          <Content />
        </div>
        <Home />

        <div className='main'>
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <SocialMedia />
        </div>


        <ScrollButton />
        {/* <Bubble /> */}
      </Fragment>
    </div>
  )
}

export default App
