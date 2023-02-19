import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hamburguer from './components/Hamburguer'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialMedia from './components/SocialMedia'
import './styles/style.css'

function App() {

  return (
    <div className='header'>
      <div >
        <Hamburguer />
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
