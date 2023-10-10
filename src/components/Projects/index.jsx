import React from 'react'
import './styles.css'
import { projects } from '../../services/projects'

const Projects = () => {
  return (
    <div id="projects-container">
      <h1>Projetos</h1>
      {
        projects.map(({id, title, skills}) => (
          <div className="project-row" key={id}>
              <h3>{title}</h3>
              <h4>Desenvolvido em: {skills}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default Projects