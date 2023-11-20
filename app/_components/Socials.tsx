'use client'

import { FaFacebook, FaTiktok, FaInstagram, FaMailBulk } from 'react-icons/fa';
import { useContext} from 'react';
import { ContentContext } from '../_contexts/ContentContext';

export default function Socials() {
  const {email, instagram,tikTok, facebook} = useContext(ContentContext);

  return (
    <div className="socials">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='social-i'/>
        </a>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='social-i'/>
        </a>
        <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className='social-i'/>
        </a>
        <a href={`mailto:${email && email.text}`}>
          <FaMailBulk className='social-i'/>
        </a>
        <p>
          Vitatours
        </p>
    </div>
  )
}
