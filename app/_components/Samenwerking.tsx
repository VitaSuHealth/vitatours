import { client } from "../_lib/client";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

async function getContent () {
    const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'samenwerking'});
    const fields  = res.items[0].fields;
     return fields;
  }

export default async function Samenwerking() {
    const fields = await getContent();
    const {afbeelding, tekst} = fields;

    return (
    <div id='samenwerking'>
        <div className="heading">
            <h2 className="section-heading">
                Uw Persoonlijke Assistent
            </h2>
        </div>
        <div className="columns">
            <div className="afbeelding">
                <Image src={`https:` + afbeelding.fields.file.url} 
                        width="1000"
                        height="1000"
                        alt={`${fields.naam} image`} priority={true}/>
            </div>
            <div className="text">
                <p className="text-header">Samenwerking met meer dan:</p>
                {documentToReactComponents(tekst)}
                <p className="text-p">Ressorten in geheel</p>
                <p className="suriname">Suriname</p>
                <Link href={'/ressorten'} className="secund-btn">Bekijk Ressorten </Link>
            </div>
        </div>
    </div>
  )
}
