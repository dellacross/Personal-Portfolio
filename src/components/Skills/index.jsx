import React from 'react'
import './styles.css'

const Skills = () => {
  return (
    <div id="skills-container">
        <h1>Habilidades:</h1>
        <div className="skill-row">
        <div className="skill-icon"><ion-icon name="logo-javascript"></ion-icon></div>
        <div className="skill-text">            
            <h4>JavaScript</h4>
            <h5>Aplicação: Estágio em Desenvolvimento Web - Cotemig Colégio e Faculdade</h5>
        </div>
        </div>
        <div className="skill-row">
        <div className="skill-icon"><ion-icon name="logo-react"></ion-icon></div>
        <div className="skill-text">            
            <h4>ReactJs</h4>
            <h5>Aplicação: Estágio em Desenvolvimento Web - Cotemig Colégio e Faculdade</h5>
        </div>
        </div>
        <div className="skill-row">
        <div className="skill-icon"><ion-icon name="logo-html5"></ion-icon></div>
        <div className="skill-text">            
            <h4>HTML5</h4>
            <h5>Aplicação: Estágio em Desenvolvimento Web - Cotemig Colégio e Faculdade</h5>
        </div>
        </div>
        <div className="skill-row">
        <div className="skill-icon"><ion-icon name="logo-css3"></ion-icon></div>
        <div className="skill-text">            
            <h4>CSS3</h4>
            <h5>Aplicação: Estágio em Desenvolvimento Web - Cotemig Colégio e Faculdade</h5>
        </div>
        </div>
        <div className="skill-row">
        <div className="skill-icon"><ion-icon name="logo-python"></ion-icon></div>
        <div className="skill-text">            
            <h4>Python</h4>
            <h5>Aplicação: Realização de Trabalhos Práticos durante a Graduação</h5>
        </div>
        </div>
        <div className="skill-row">
        <div className="skill-icon"><ion-icon name="laptop-outline"></ion-icon></div>
        <div className="skill-text">            
            <h4>C++</h4>
            <h5>Aplicação: Realização de Trabalhos Práticos durante a Graduação</h5>
        </div>
        </div>
        <div className="skill-row">
        <div className="skill-icon"><ion-icon name="laptop-outline"></ion-icon></div>
        <div className="skill-text">            
            <h4>C</h4>
            <h5>Aplicação: Realização de Trabalhos Práticos durante a Graduação</h5>
        </div>
        </div>
    </div>
  )
}

export default Skills