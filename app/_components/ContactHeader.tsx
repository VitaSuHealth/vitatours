import Image from "next/image"

function ContactHeader() {
  return (
    <div className="contact-header">
        <div className="banner">
            <h1 className="heading-text">Get In Touch</h1>
            {/* Background */}
            <Image className='banner-img' src='/footer-img.jpg'
                width="1000"
                height='600'
                alt='logo' 
                placeholder="blur"
                blurDataURL={'/logo.png'}
                priority={true}
            />
            <div className="banner-backdrop"></div>
        </div>
    </div>
  )
}

export default ContactHeader