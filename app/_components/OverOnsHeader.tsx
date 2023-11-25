import Image from "next/image"
import { client } from "../_lib/client";
import SiteContent from "../_types/SiteContent";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getHeading () {
  const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'over-ons-banner'});
  const heading  = res.items[0].fields;
   return heading;
}

export default async function OverOnsHeader() {
  const heading: SiteContent = await getHeading();
  const headerAfbeelding = heading.afbeelding; 
  const tekst = heading.tekst;
  return (
    <div className="over-ons-header">
        <div className="banner" style={{backgroundImage: `url(${headerAfbeelding?.fields.file.url})`}}>
            <div className="heading-text heading-over-ons">{documentToReactComponents(tekst!)}</div>
            <h1 className="heading-branding">Vita Tours</h1>
            {/* Background */}
            {/* <Image className='banner-img' src={`https:${headerAfbeelding?.fields.file.url}`}
                width="1000"
                height='600'
                alt='logo' 
                placeholder="blur"
                blurDataURL={'/logo.png'}
                priority={true}
            /> */}
        </div>
    </div>
  )
}
