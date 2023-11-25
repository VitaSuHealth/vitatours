import React from 'react'
import Socials from './Socials'
import Form from './Form'

export default function FormSection({heading, showSocials, subject}: {heading: string, showSocials: boolean, subject?:string}) {
  return (
    <div className='form-section'>
      {showSocials && <Socials/> }
        <div className="spacer"></div>
        <div className="form-heading">
            <h3>{heading}</h3>
        </div>
        <div className="form-p">
            <p>Wij koppelen zou gauw mogelijk terug met u.</p>
        </div>
        <Form subject={subject}/>
    </div>

  )
}
