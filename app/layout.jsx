import './globals.scss'
import ContentProvider from './_contexts/ContentContext'

import Nav from '@/app/_components/Nav'
import Footer from './_components/Footer'
import { ToastContainer} from 'react-toastify';

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin']
})

  
  export default function RootLayout({children}) {

  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/images/logo.ico" type="image/x-icon" />
      <title>Collaboratio</title>
      </head>
      <body className={`${montserrat.className}`}>
            <ContentProvider>
              <Nav />
              {children}
              <ToastContainer />
              <Footer/>
            </ContentProvider>
      </body>
    </html>
  )
}
