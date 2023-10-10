import React from 'react'

const AboutMeData = (props) => {
  return (
    <div className="aboutme-data">
      <ion-icon name={props.icon}></ion-icon>
      <h3>{props.description}</h3>
    </div>
  )
}

export default AboutMeData