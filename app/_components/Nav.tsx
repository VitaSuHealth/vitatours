'use client'

import React, {useContext, useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimesCircle, FaPhone} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import { ContentContext } from '../_contexts/ContentContext'

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const {adres, telNummer} = useContext(ContentContext);
  
  return (
    <div className="container">
      <div className='nav'>
        <div className='nav-left branding'>
          <Link
            href={"/"} scroll={true}>
              {/* <Image src='/logo.png'
                width="100"
                height='100'
                alt='logo' 
                placeholder="blur"
                blurDataURL={'/images/logo.ico'}
                priority={true}
              /> */}
              <h1 className='branding'>VitaTours</h1>
          </Link>
        </div>
        <div className= {`nav-right list ${!showMenu ? 'hide': ""}`}
          onClick={() => setShowMenu(false)}>
          <div className="nav-flex">
            <ul>
              <li><Link href="/overons" scroll={true} className={usePathname().match('/overons') ? 'active' : " "}>Over Ons</Link></li>
              <li><Link href="/ressorten" className={usePathname().match('/ressorten') ? 'active' : ""}>Ressorten</Link></li>
              <li><Link href="/contact" className={usePathname().match('/contact') ? 'active' : ""}>Contact</Link></li>
            </ul>
            <div className="nav-contact">
                <div className="tel-nummer">
                    <FaPhone className='nav-contact-i'/>
                    <a href={`tel:${telNummer && telNummer.text}`}>
                      <p>{telNummer && telNummer.text}</p>
                    </a>
                </div>
                <div className="adres">
                  <ImLocation2 className='nav-contact-i'/>
                  <a href={adres && adres!.link} target='_blank'>
                    <p>{adres && adres.text}</p>
                  </a>
                </div>
            </div>
          </div>
          
        </div>
        {/* Toggle hamburger and X menu icon*/}
        {
        showMenu ? <FaTimesCircle size="2.5rem" className='menuI' 
        onClick={() => setShowMenu(!showMenu)}/>

        : <FaBars size="2.5rem" className='menuI' 
            onClick={() => setShowMenu(!showMenu)}/>
        }
        
        {/* BG with opacity on navbar */}
        <div className='nav-box'></div>
      </div>
    </div>
  )
}