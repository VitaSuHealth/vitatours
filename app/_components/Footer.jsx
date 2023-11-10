'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';
import {client} from "@/app/_lib/client"
import { useEffect, useState } from 'react';

// type contactGegevens = {
//     naam: string,
//     text: string,
//     slug: string

// }


export default function Footer() {
    
    const getContactGegevens  = async () =>  {
        const res = await client.getEntries({content_type:'contactGegevens'});
        const items = res.items;
        const adres  = items.filter(item => item.fields.slug == 'adres');
        console.log(adres.fields);
        setAdress(adres.fields.text);
        return res;
    }
    
    useEffect(() => {
        getContactGegevens();

    }, [])

    const [adress, setAdress] = useState();
    const [openingstijden, setOpeningstijden] = useState('');
    // console.log(adress.fields.text)

// const contactGegevens = await getContactGegevens();
// const items : any[] = await contactGegevens.items;
// const adress = await items.filter(item => item.slug == 'openingstijden');
// console.log( items);

  return (
    <footer className='footer'>
        <div className="container">
            <div className='footer-columns'>
                <div className="column-left">
                    <div className="openingstijden">
                        <h3>Openingstijden:</h3>
                        <p>Maandag - Vrijdag: 08:00u  - 15:00u</p>
                        {adress}
                        <Socials/>
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