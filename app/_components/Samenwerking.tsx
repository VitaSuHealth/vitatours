import { client } from "../_lib/client";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

async function getContent () {
    const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'samenwerking'});
    const fields  = res.items[0].fields;
     return fields;
}

async function getHeading () {
    const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'heading-home-1'});
    const heading  = res.items[0].fields;
     return heading;
}

export default async function Samenwerking({showHeader}: {showHeader: boolean}) {
    const fields = await getContent();
    const heading = await getHeading();
    const {afbeelding, tekst} = fields;
    const headerTekst = heading.tekst;

    return (
    <div id='samenwerking'>
        {showHeader && 
            <div className="heading">
                <div className="section-heading">
                {documentToReactComponents(headerTekst)}
                </div>
            </div>
        }
        <div className="columns">
            <div className="afbeelding">
                <Image src={`https:` + afbeelding.fields.file.url} 
                        width="1000"
                        height="1000"
                        placeholder="blur"
                        blurDataURL={'/images/logo.ico'}
                        alt={`${fields.naam} image`} priority={true}/>
                        
            </div>
            <div className="text">
                <p className="text-header">Samenwerking met meer dan:</p>
                <div className="amount">
                    {documentToReactComponents(tekst)}
                </div>
                <p className="text-p">Ressorten in geheel</p>
                <p className="suriname">Suriname</p>
                <Link href={'/ressorten'} className="secund-btn">Bekijk Ressorten </Link>
            </div>
        </div>
    </div>
  )
}
