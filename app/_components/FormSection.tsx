import React from 'react'
import Socials from './Socials'
import Form from './Form'

export default function FormSection() {
  return (
    <div className='form-section'>
        <Socials/>
        <div className="spacer"></div>
        <div className="form-heading">
            <h3>Laat Ons Weten Waarmee Wij U Van Dienst Kunnen Zijn.</h3>
        </div>
        <div className="form-p">
            <p>Wij nemen zou gauw mogelijk contact op met u.</p>
        </div>
        <Form/>
    </div>

  )
}
