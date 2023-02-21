import { useEffect } from 'react'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hamburguer from './components/Hamburguer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialMedia from './components/SocialMedia'
import './styles/style.css'

function App() {

  /* useEffect(() => {
    const hamb = document.querySelector('.hamburguer');
    const menu = document.querySelector('.nav-menu');
    console.log(hamb, 'hamburguer');
    console.log(menu, 'menu');

    hamb.addEventListener('click', () => {
      menu.classList.toggle("spread");
    })

    window.addEventListener("click", (e) => {
      if (menu.classList.contains("spread") && e.target != menu && e.target != hamb) {
        menu.classList.toggle("spread");
      }
    })
  }, []); */

  return (
    <div className='header'>
      <div >
        {/* <Hamburguer /> */}
        <Navbar/>
      </div>

      <Home />

      <div className='main'>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <SocialMedia />
      </div>

    </div>
  )
}

export default App
