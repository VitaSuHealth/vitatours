'use client'
import './globals.scss'

// import AuthProvider from './_contexts/AuthContext';
import Nav from './_components/Nav'
import Footer from './_components/Footer'
import { ToastContainer} from 'react-toastify';


import { Montserrat } from 'next/font/google'
// import AppProvider from './_contexts/AppContext';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin']
})

  
  export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/images/logo.ico" type="image/x-icon" />
      <title>Collaboratio</title>
      </head>
      <body className={`${montserrat.className}`}>
            <Nav/>
            {children}
            <ToastContainer />
            <Footer/>
      </body>
    </html>
  )
}
