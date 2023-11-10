import React from 'react'
import Questions from '@/app/_components/Questions'
import ContactLinks from '@/app/_components/ContactLinks'
import FormSection from '@/app/_components/FormSection'

export default function page() {
  return (
    <div>
        <div className="container">
            
          <Questions/>
          <ContactLinks/>
          <FormSection/>
        </div>
    </div>
  )
}