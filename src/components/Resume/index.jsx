import React from 'react'
import './styles.css'

const Resume = () => {

  const handleDownload = () => {
    fetch('curriculo-victor.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'curriculo-victor.pdf';
        alink.click();
      })
  })
  }

  return (
    <div id="resume-container">
      <div className="side-resume-box">
        <div className="photo-box">
          <img src="../../images/photo.jpeg" alt="" />
        </div>
        <div className="infos-box">
          <h3>Victor Della Croce Maltez</h3>
          <h4>Graduando em Sistemas de Informação</h4>
          <div className="resume-medias-box">
            <a className="linkedin-icon" href="https://www.linkedin.com/in/victor-della-croce-maltez-48711b187/" target="_blank"  rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a className="github-icon" href="https://github.com/dellacross" target="_blank"  rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
            <a className="insta-icon" href="https://www.instagram.com/victordella/" target="_blank"  rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
          <div className="curriculum-box">
            <button onClick={handleDownload}>
              <div className="dw-cv"><ion-icon name="download-outline"></ion-icon></div>
              <div className="cv-comp"><h3>Baixar Currículo Vitae</h3></div>
              <div className="cv-abrev"><h1>CV</h1></div>
            </button>
          </div>
        </div>
      </div>
      <div className="side-resume-box">
        <div className="about-me-resume">
          <h1>Olá!</h1>
          <h3>
            Sou graduando do 7º período do curso de Sistemas de Informação, pela Universidade Federal 
            de Minas Gerais (UFMG). Ao longo da minha formação, desenvolvi diversos projetos, em diferentes linguagens,
            e, atualmente, busco aplicar os conhecimentos adquiridos no mercado de trabalho como desenvolvedor web.
          </h3>
          <h3><a href="#aboutme-container">Saiba mais...</a></h3>
        </div>
      </div>
    </div>
  )
}

export default Resume