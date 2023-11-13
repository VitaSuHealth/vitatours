import { FaFacebook, FaTiktok, FaInstagram, FaMailBulk } from 'react-icons/fa';
import contactGegeven from '../_types/ContactGegeven';

export default function Socials({email, facebook, instagram, tikTok}: {email: contactGegeven, facebook: contactGegeven, instagram: contactGegeven, tikTok: contactGegeven}) {
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
        Vitatours
    </div>
  )
}
