import React from 'react'
import './styles.css'

const AboutMe = () => {
  return (
    <div id="aboutme-container">
      <h1>Sobre mim:</h1>
      <div className="aboutme-box">
        <header>
          <div className="aboutme-photo"></div>
        </header>
        <div className="aboutme-box-content">
          <div className="aboutme-data">
            <ion-icon name="person-outline"></ion-icon>
            <h3>Meu apelido é Della</h3>
          </div>
          <div className="aboutme-data">
            <ion-icon name="balloon-outline"></ion-icon>
            <h3>Tenho 22 anos</h3>
          </div>
          <div className="aboutme-data">
            <ion-icon name="location-outline"></ion-icon>
            <h3>Moro em Belo Horizonte/MG - Brasil</h3>
          </div>
          <div className="aboutme-data">
            <ion-icon name="football-outline"></ion-icon>
            <h3>Fanático pelo Santos Futebol Clube</h3>
          </div>
          <div className="aboutme-data">
            <ion-icon name="game-controller-outline"></ion-icon>
            <h3>Gosto muito de jogos</h3>
          </div>
          <div className="aboutme-data">
            <ion-icon name="rocket-outline"></ion-icon>
            <h3>Tenho astronomia como hobby</h3>
          </div>
          <div className="aboutme-data">
            <ion-icon name="videocam-outline"></ion-icon>
            <h3>Adoro assistir filmes e séries</h3>
          </div>
          <div className="aboutme-data">
            <ion-icon name="musical-notes-outline"></ion-icon>
            <h3>Sou bem eclético em relação à música</h3>
          </div>
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