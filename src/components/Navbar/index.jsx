import React, { useState } from 'react'
import './styles.css'

const NavBar = () => {
  return (
    <header className="main-header">
        <nav className="main-nav-bar">
        <div className="Portfolio-Owner-Name">
          <h4><b>Victor</b> Della</h4>
        </div>
        <div className="nav-menu">
            <div className="nav-menu-item"><a>Home</a></div>
            <div className="nav-menu-item"><a href="#projects-container">Projetos</a></div>
            <div className="nav-menu-item"><a href="#experience-container">Formações</a></div>
            <div className="nav-menu-item"><a href="#skills-container">Habilidades</a></div>
            <div className="nav-menu-item"><a href="#contact-container">Contato</a></div>
        </div>
        <div className="social-medias-box">
            <div className="social-media-box linkedin-icon"><a href="https://www.linkedin.com/in/victor-della-croce-maltez-48711b187/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></div>
            <div className="insta-icon social-media-box"><a href="https://www.instagram.com/victordella/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></div>
            <div className="social-media-box github-icon"><a href="https://github.com/dellacross" target="_blank"><ion-icon name="logo-github"></ion-icon></a></div>
            <div className="social-media-box language-icon"><ion-icon name="globe-outline"></ion-icon></div>
        </div>
        </nav>
    </header>
  )
}

export default NavBar