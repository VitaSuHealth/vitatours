import Image from "next/image"
import { client } from "../_lib/client";
import SiteContent from "../_types/SiteContent";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

async function getHeading () {
  const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'contact-header'});
  const heading  = res.items[0].fields;
   return heading;
}

export default async function ContactHeader() {
  const heading: SiteContent = await getHeading();
  const {afbeelding, tekst} = heading;
  // const headerAfbeelding = heading.afbeelding;
  
  return (
    <div className="contact-header">
        <div className="banner" style={{backgroundImage: `url(${afbeelding?.fields.file.url})`}}>
            <div className="heading-text heading-contact">
              {documentToReactComponents(tekst!)}
            </div>
            {/* Background */}
            {/* <Image className='banner-img' src={`https:${afbeelding?.fields.file.url}`}
                width="1000"
                height='600'
                alt='logo' 
                placeholder="blur"
                blurDataURL={'/images/logo.ico'}
                priority={true}
            /> */}
            {/* <div className="banner-backdrop"></div> */}
        </div>
    </div>
  )
}