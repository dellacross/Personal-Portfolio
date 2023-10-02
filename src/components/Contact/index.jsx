import React from 'react'
import './styles.css'

const ContactContainer = () => {
  return (
    <div id="contact-container">
      <h1>Contato</h1>
      <div className="contact-row">
        <ion-icon name="call-outline"></ion-icon>
        <h3>(31) 99926-0438</h3>
      </div>
      <div className="contact-row">
        <ion-icon name="mail-outline"></ion-icon>
        <h3>victordella652@gmail.com</h3>
      </div>
      <div className="contact-row">
        <ion-icon name="logo-instagram"></ion-icon>
        <h3>@victordella</h3>
      </div>
      <div className="contact-row">
        <ion-icon name="business-outline"></ion-icon>
        <h3>Belo Horizonte/MG - Brasil</h3>
      </div>
    </div>
  )
}

export default ContactContainer