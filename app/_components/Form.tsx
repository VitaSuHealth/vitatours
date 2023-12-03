'use client'
import React, {useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {SendContactForm} from "@/app/_lib/api"
// import {mailOptions, transporter} from "@/app/_lib/nodemailer"

//Libraries
import { FaAsterisk } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormData from '../_types/FromData';
import MiniLoader from './MiniLoader';



function Form({subject}: {subject?: string}) {

  const [miniLoader, setMiniLoader] = useState<boolean>(false);
  let naam:string = ''
  let telNummer:string = ''
  let email:string = ''
  let onderwerp:string = ''
  let bericht: string = ''


  //Formik Logic
  const contactForm = useFormik({

    initialValues: {
      naam: naam,
      telNummer: telNummer,
      email: email,
      onderwerp: onderwerp,
      bericht: bericht
    },

    //Validate form
    validationSchema: Yup.object({
        naam: Yup.string().min(2, "Controleer als uw naam goed is geschreven").required("*Uw naam is voor ons zeer belangrijk."),
        telNummer: Yup.string().required("*Vult u aub ook uw telefoonnummer in."),
        bericht: Yup.string().required("*Laat ons weten waarmee wij u kunnen assisteren."),
    }),


    onSubmit: async (values) => {

      //Start loading animation
      setMiniLoader(true);

      //Create object with form data
      let data: FormData = {
          naam: values.naam,
          telNummer: values.telNummer,
          email: values.email,
          onderwerp: values.onderwerp,
          bericht: values.bericht
      }

      try {
        await SendContactForm(data).then(() => {
          //Display succes toast and reset form
          succesToast();
          contactForm.resetForm();

        })
      } catch (e) {
        //Display error toast
          errorToast();
      }

      //Turn of loading animation after 1.5sec
      setTimeout(() => {
          setMiniLoader(false);
      }, 1500);
    },
});

//Toast timer
const timer = 3000;

//Toast messages
  const succesMessage = '📧🛵 Uw bericht is ontvangen!!! \nBedankt🤝🙏'
  const errorMessage = 'Er is iets mis gegaan tijdens het versturen van uw bericht.\n Zou je het opnieuw kunnen proberen?🧐🫠'

  //Succes toast
  const succesToast = () => {
    toast.success(succesMessage, {
      position: "top-right",
      autoClose: timer,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  //Error toast
  const errorToast = () => {
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  }

  return (
    <div id='form'>
      <div className="wrapper">
          <form className='contact-form' onSubmit={contactForm.handleSubmit}>
            <div className="form-row">
                <div className="name-form">
                <label htmlFor="naam"><FaAsterisk size='12px' color='red' />Naam:</label>
                <input type="text" name="naam" id="naam"
                    placeholder='Voornaam en Achternaam' onChange={contactForm.handleChange} value={contactForm.values.naam}/>
                {(contactForm.touched.naam && contactForm.errors.naam) && 
                  <p className='form-error'>
                      {contactForm.errors.naam}
                  </p>
                }
                </div>
                <div className="phone">
                <label htmlFor="telNummer"><FaAsterisk size='12px' color='red' /> Tel. nummer:</label>
                <input type="tel" name="telNummer" id="telNummer"
                    placeholder='Telefoon Nummer' onChange={contactForm.handleChange} value={contactForm.values.telNummer}/>
                {(contactForm.touched.telNummer && contactForm.errors.telNummer) && 
                  <p className='form-error'>
                      {contactForm.errors.telNummer}
                  </p>
                }
                </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" autoComplete='email'
                placeholder='Email (niet verplicht)' onChange={contactForm.handleChange} value={contactForm.values.email}
              />
            </div>
            <div className="onderwerp">
              <label htmlFor="onderwerp">Onderwerp:</label>
              <input type="text" name="onderwerp" id="onderwerp"
                placeholder='Onderwerp' value={subject ? `Trip naar: ${subject}` : contactForm.values.onderwerp} onChange={contactForm.handleChange} readOnly={subject ? true : false}
              />
            </div>
            <div className="bericht">
              <label htmlFor="bericht"><FaAsterisk size='12px' color='red' />Bericht:</label>
              <textarea name="bericht" id="bericht"
                placeholder='Uw bericht...' onChange={contactForm.handleChange} value={contactForm.values.bericht}>
              </textarea>
              {(contactForm.touched.bericht && contactForm.errors.bericht) && 
                <p className='form-error'>
                    {contactForm.errors.bericht}
                </p>
              }
            </div>
            <div className="bevestigen">
              {!miniLoader ?  
                <input type="submit" value='VERZENDEN' name="submit"id='submit' className='btn btn-sumbit' />
              : <MiniLoader/>
              }
            </div>
          </form>
        </div>
      <ToastContainer />
    </div>
  )
}

export default Form
