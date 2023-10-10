import React from 'react'
import './styles.css'
import NavBar from '../../components/Navbar'
import Resume from '../../components/Resume'
import ContactContainer from '../../components/Contact'
import AcadEducation from '../../components/AcadEducation'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Copyright from '../../components/Copyright'
import AboutMe from '../../components/AboutMe'
import DarkMode from '../../components/darkMode'

const Home = () => {
  return (
    <div className="page-container">
      <div id="main-container">
        <NavBar />
        <Resume />
        <AcadEducation />
        <Skills />
        <Projects />
        <AboutMe />
        <ContactContainer />
        <Copyright />
        <DarkMode />
      </div>
    </div>
  )
}

export default Home