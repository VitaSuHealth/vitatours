import Link from "next/link"
import { FaPhone, FaLocationArrow} from 'react-icons/fa'
import { ImLocation2 } from "react-icons/im"


export default function ContactLinks() {
  return (
    <div className='contact-links'>
        <div className="wrapper">
            <div className="columns">
                <div className="phone">
                    <div className="icon">
                        <FaPhone size="2.5rem"/>
                    </div>
                    <div className="title">Bell of App:</div>
                    <div className="content">
                        +597 8933936
                    </div>
                </div>
                <div className="location">
                    <div className="icon">
                        {/* <ImLocation2 size="2.5rem" /> */}
                        <FaLocationArrow size="2.5rem"/>
                    </div>
                    <div className="title">Location:</div>
                        <div className="content">
                            Madeliefjestraat #15
                        </div>
            </div>
            <div className="contact-link">
                <div className="title">Een bericht via ons formulier</div>
                <div className="content">
                    <Link href='/contact#form' className="main-btn">Contact</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
