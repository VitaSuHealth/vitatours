import './globals.scss'
import ContentProvider from './_contexts/ContentContext'

import Nav from '@/app/_components/Nav'
import Footer from './_components/Footer'
import { ToastContainer} from 'react-toastify';

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Website Vita Tours',
  description: 'Website van Vita Tours',
  openGraph: {
    title: `Website van Vita Tours`,
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitahealth.sr%2F&psig=AOvVaw0Ummre69IhdHXm4UyZCnHS&ust=1701542198029000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiev-Tw7oIDFQAAAAAdAAAAABAH",
        width: 1200,
        height: 630,
        alt: `Vita Tours  image`
      }
    ],
  },
}

  
  export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="nl">
      <head>
      <title>Vita Tours</title>
      <meta name="google-site-verification" content="smonGHGxcRMn9Mlj5_L52jYrolrhr0YrOEVKsM628fE" />
      </head>
      <body>
            <ContentProvider>
              <Nav />
              {children}
              <Footer/>
              <ToastContainer />
            </ContentProvider>
      </body>
    </html>
  )
}
