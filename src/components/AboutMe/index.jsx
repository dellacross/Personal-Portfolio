import React from 'react'
import './styles.css'
import { aboutMeDatas } from '../../services/aboutme'
import AboutMeData from './AboutMeData'
const AboutMe = () => {
  return (
    <div id="aboutme-container">
      <h1>Sobre mim</h1>
      <div className="aboutme-box">
        <header>
          <div className="aboutme-photo"></div>
        </header>
        <div className="aboutme-box-content">
          {
            aboutMeDatas.map(({id, icon, description}) => (
              <AboutMeData key={id} icon={icon} description={description}/>
            ))
          }
          <div className="resume-medias-box">
            <a className="linkedin-icon" href="https://www.linkedin.com/in/victor-della-croce-maltez-48711b187/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a className="github-icon" href="https://github.com/dellacross" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            <a className="insta-icon" href="https://www.instagram.com/victordella/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe