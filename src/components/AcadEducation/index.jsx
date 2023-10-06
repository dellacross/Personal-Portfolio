import React from 'react'
import './styles.css'
import { academics } from '../../services/academics'
import { experience } from '../../services/experience'
const AcadEducation = () => {
  return (
    <div id="experience-container">
        <div className="academic-education-box">
            <h1>Formação Acadêmica</h1>
            {
                academics.map(({id, description, situation}) => (
                    <div className="academic-education-item" key={id}>
                        <h3>{situation}</h3>
                        <h4>{description}</h4>
                    </div>
                ))
            }
        </div>
        <div className="academic-education-box">
            <h1>Experiências</h1>
            {
                experience.map(({id, title, initDate, finalDate, local, description}) => (
                    <div className="academic-education-item" key={id}>
                        <h3>{title}</h3>
                        <h4>{initDate} - {finalDate ? finalDate : "Atualmente"}: Cotemig - Colégio e Faculdade</h4>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AcadEducation