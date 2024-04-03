import React from 'react'
import ContactComponent from '../../components/ContactComponent/ContactComponent'
import NavBar from '../../components/NavBarComponent/NavBar'

function Contact() {
  return (
    <div>
      <NavBar pageTitle="Meus Contatos"/>
     <ContactComponent/>
    </div>
  )
}

export default Contact
