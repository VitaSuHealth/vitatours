import Image from "next/image"
import { client } from "../_lib/client";
import SiteContent from "../_types/SiteContent";

async function getHeading () {
  const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'over-ons-banner'});
  const heading  = res.items[0].fields;
  console.log(heading)
   return heading;
}

export default async function ContactHeader() {
  const heading: SiteContent = await getHeading();
  const headerAfbeelding = heading.afbeelding; 
  return (
    <div className="contact-header">
        <div className="banner">
            <h1 className="heading-text heading-contact">Get In Touch</h1>
            {/* Background */}
            <Image className='banner-img' src={`https://${headerAfbeelding?.fields.file.url}`}
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