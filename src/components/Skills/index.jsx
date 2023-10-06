import React from 'react'
import './styles.css'
import { skills } from '../../services/skills'

const Skills = () => {
  return (
    <div id="skills-container">
        <h1>Habilidades:</h1>
        {
            skills.map(({id, title, enforcement, icon}) => (
            <div className="skill-row" key={id}>
                <div className="skill-icon"><ion-icon name={icon}></ion-icon></div>
                <div className="skill-text">            
                    <h4>{title}</h4>
                    <h5>{enforcement}</h5>
                </div>
            </div>  
            ))
        }
    </div>
  )
}

export default Skills