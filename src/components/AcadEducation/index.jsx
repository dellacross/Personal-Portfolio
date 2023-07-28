import React from 'react'
import './styles.css'

const AcadEducation = () => {
  return (
    <div id="experience-container">
        <div className="academic-education-box">
        <h1>Formação Acadêmica</h1>
        <div className="academic-education-item">
            <h3>Graduação em Andamento:</h3>
            <h4>2020/2: Sistemas de Informação - UFMG - Previsão de Formatura: 2024/2</h4>
        </div>
        <div className="academic-education-item">
            <h3>Graduação Interrompida:</h3>
            <h4>2019/1 - 2020/1: Matemática - UFMG</h4>
        </div>
        <div className="academic-education-item">
            <h3>Ensino Médio Completo:</h3>
            <h4>2016 - 2018: Colégio Espanhol Santa Maria Minas - Unidade Cidade Nova</h4>
        </div>
        </div>
        <div className="academic-education-box">
        <h1>Experiências</h1>
        <div className="academic-education-item">
            <h3>Estágio em Desenvolvimento Web:</h3>
            <h4>Mar/2023 - Atualmente: Cotemig - Colégio e Faculdade</h4>
        </div>
        </div>
    </div>
  )
}

export default AcadEducation