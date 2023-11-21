import './globals.scss'
import ContentProvider from './_contexts/ContentContext'

import Nav from '@/app/_components/Nav'
import Footer from './_components/Footer'
import { ToastContainer} from 'react-toastify';

import { Irish_Grover } from 'next/font/google'



// const irishGrover = Irish_Grover({
//     weight: "400",
//     style: "normal",
//     subsets: ['latin'],
//     variable: "--header-font"
// })

  
  export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="nl">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

      <title>Vita Tours</title>
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
