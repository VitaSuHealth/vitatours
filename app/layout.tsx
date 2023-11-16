import './globals.scss'
import ContentProvider from './_contexts/ContentContext'

import Nav from '@/app/_components/Nav'
import Footer from './_components/Footer'
import { ToastContainer} from 'react-toastify';

import { Montserrat, Irish_Grover } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin']
})

// const irishGrover = Irish_Grover({
//     weight: "400",
//     style: "normal",
//     subsets: ['latin'],
//     variable: "--header-font"
// })

  
  export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/images/logo.ico" type="image/x-icon" />
      <title>Collaboratio</title>
      </head>
      <body>
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
