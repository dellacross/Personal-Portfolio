import React from 'react'
import './styles.css'

const NavBar = () => {
  return (
    <header id="main-header">
      <nav className="main-nav-bar">
        <div className="Portfolio-Owner-Name">
          <h4><b>Victor</b> Della</h4>&nbsp;{"</>"}
        </div>
        <div className="nav-menu">
          <div className="nav-menu-item"><a href="#resume-container" rel="noreferrer">Home</a></div>
          <div className="nav-menu-item"><a href="#projects-container" rel="noreferrer">Projetos</a></div>
          <div className="nav-menu-item"><a href="#experience-container" rel="noreferrer">Formações</a></div>
          <div className="nav-menu-item"><a href="#skills-container" rel="noreferrer">Habilidades</a></div>
          <div className="nav-menu-item"><a href="#contact-container" rel="noreferrer">Contato</a></div>
        </div>
        <div className="social-medias-box">
          <div className="social-media-box linkedin-icon"><a href="https://www.linkedin.com/in/victor-della-croce-maltez-48711b187/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a></div>
          <div className="insta-icon social-media-box"><a href="https://www.instagram.com/victordella/" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a></div>
          <div className="social-media-box github-icon"><a href="https://github.com/dellacross" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a></div>
          <div className="social-media-box language-icon"><ion-icon name="globe-outline"></ion-icon></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar