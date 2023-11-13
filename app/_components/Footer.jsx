'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';
import {client} from "@/app/_lib/client"
import { useContext, useEffect, useState } from 'react';
import { Irish_Grover } from 'next/font/google';
import contactGegeven from '../_types/ContactGegeven';
import { ContentContext } from '../_contexts/ContentContext';



export default function Footer() {
    const {email, instagram,tikTok, facebook, openingstijden} = useContext(ContentContext);

  return (
    <footer className='footer'>
        <div className="container">
            <div className='footer-columns'>
                <div className="column-left">
                    <div className="openingstijden">
                        <h3>Openingstijden:</h3>
                        <p>{openingstijden && openingstijden.text}</p>
                        {/* {adress} */}
                        <Socials email ={email} instagram={instagram} tikTok={tikTok} facebook={facebook}/>
                    </div>
                </div>
                <div className="column-right">
                    <div className='site-links'>
                        <ul>
                            <li><Link href="/" scroll={true} className={usePathname().endsWith('/') ? 'active' : " "}>Home</Link></li>
                            <li><Link href="/overons" scroll={true} className={usePathname().match('/overons') ? 'active' : " "}>Over Ons</Link></li>
                            <li><Link href="/ressorten" scroll={true} className={usePathname().match('/ressorten') ? 'active' : " "}>Ressorten</Link></li>
                            <li><Link href="/contact" className={usePathname().match('/contact') ? 'active' : ""}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* Background */}
        <Image className='footer-img' src='/footer-img.jpg'
            width="1000"
            height='600'
            alt='logo' 
            placeholder="blur"
            blurDataURL={'/logo.png'}
            priority={true}
        />
        <div className="footer-backdrop"></div>
    </footer>
  )
}