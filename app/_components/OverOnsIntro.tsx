import { client } from "../_lib/client";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

async function getContent () {
    const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'over-ons-column'});
    const fields  = res.items[0].fields;
     return fields;
}

export default async function OverOnsIntro() {
    const fields = await getContent();
    const {tekst, afbeelding} = fields;

  return (
    <div id="about-intro">
        <div className="heading">
            <h2 className="section-heading">
            {/* {documentToReactComponents(headerTekst)} */}
            Persoonlijke Assistent
            </h2>
        </div>
        <div className="intro-container">
            <div className="afbeelding">
                <Image src={`https:` + afbeelding.fields.file.url} 
                        width="1000"
                        height="1000"
                        alt={`${fields.naam} image`} priority={true}/>
            </div>
            <div className="text">
                {documentToReactComponents(tekst)}
            </div>
        </div>
    </div>
  )
}
