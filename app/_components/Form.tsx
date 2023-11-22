'use client'
import React, { useEffect, useRef, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

//Libraries
import emailjs from '@emailjs/browser';
import { FaAsterisk } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [template, setTemplate] = useState(null);
  const [stringOrder, setStringOrder] = useState('');

  //Input states
  const [naam, setNaam] = useState('');
  const [telNum, setTelNum] = useState('');

  const form = useRef();

  //Toat message and Redirect to Home
  const timer = 5000;

//   const goToHome = () => {
//     setTimeout(() => {
//       router.push('/')
//     }, timer + 200);
//   }
  
//   const berichtToast = '📧🛵 Uw bericht is ontvangen!!! Bedankt🤝🙏'
//   const orderToast = 'Uw bestelling is ontvangen!🎈🛒   Bedankt voor het shoppen bij Vita Health!✨🎁'

//   const notify = () => {
//     toast.success(asPath === '/checkout' ? orderToast : berichtToast, {
//       position: "top-right",
//       autoClose: timer,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   }

//   const errorMsg = (errorMessage) => {
//     toast.error(errorMessage, {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored"
//     });
//   }

//   //Email js template [order of message] (afhankelijk van de route);
//   useEffect(() => {  
//     if(asPath === '/checkout'){
//       getOrderString(order);
//       setTemplate('template_cidwom5');
//     } else {
//       setTemplate('template_hhtgrcf');
//     }

//   }, []);

//   //Email js, Send email.
//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (!naam && !telNum) {
//       errorMsg('Vul AUB uw naam en telefoonnummer in.')
//       return;
//     }

//     if (!naam) {
//       errorMsg('Vul AUB uw naam in.');
//       return
//     }
//     if (!telNum) {
//       errorMsg('Vul AUB uw telefoonnummer in.')
//       return
//     }
//     emailjs.sendForm('service_lhypyia', template , form.current, '1ATzfZCCbAXpH2dHZ')
//       .then((result) => {
//           notify();
//           goToHome();
//           e.target.reset();
//           setNaam(null);
//           setTelNum(null);
//           setOrder([]);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };


  return (
    <div id='form'>
      <div className="wrapper">
          <form className='contact-form'>
            <div className="form-row">
                <div className="name-form">
                <label htmlFor="user_name"><FaAsterisk size='12px' color='red' />Naam:</label>
                <input type="text" name="user_name" id="user_name"
                    placeholder='Voornaam en Achternaam' value={naam} onChange={(e) => setNaam(e.target.value)}
                />
                </div>
                <div className="phone">
                <label htmlFor="user_telnumber"><FaAsterisk size='12px' color='red' /> Tel. nummer:</label>
                <input type="tel" name="user_telnumber" id="user_telnumber"
                    placeholder='Telefoon Nummer' value={telNum} onChange={(e) => setTelNum(e.target.value)}
                />
                </div>
            </div>
            <div className="email">
              <label htmlFor="user_email">Email</label>
              <input type="email" name="user_email" id="user_email"
                placeholder='Email (niet verplicht)'
              />
            </div>
            <div className="bericht">
              <label htmlFor="message"><FaAsterisk size='12px' color='red' />Bericht:</label>
              <textarea name="message" id="message"
                placeholder='Uw bericht...'>
              </textarea>
            </div>
            <div className="bevestigen">
              <input type="submit" value='VERZENDEN' name="submit"id='submit' className='btn btn-sumbit' />
            </div>
          </form>
        </div>
      <ToastContainer />
    </div>
  )
}

export default Form
