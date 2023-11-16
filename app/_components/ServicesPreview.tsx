import { client } from "../_lib/client";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ServiceCard from "./ServiceCard";
import contentfulReturn from "../_types/ContentfulReturn";

async function getDiensten () {
    const res = await client.getEntries({content_type:'diensten'});
    const items  = res.items;
     return items;
}

async function getHeading () {
    const res = await client.getEntries({content_type:'siteContent', 'fields.slug': 'heading-home-2'});
    const heading  = res.items[0].fields;
     return heading;
}

export default async function ServicesPreview() {
    const items : contentfulReturn[] = await getDiensten();
    const heading = await getHeading();
    const headerTekst = heading.tekst;
  return (
    <div id="services-preview">
         <div className="heading">
            <h2 className="section-heading">
            {documentToReactComponents(headerTekst)}
            </h2>
        </div>
        <div className="columns">
            {items?.map( item  => (
                <ServiceCard service= {item} row={false} key={item.fields.slug}/>
            ))
            }
        </div>
        <div className="cta">
            <Link href={'/overons'} className="secund-btn">Meer Over Ons </Link>
        </div>


    </div>
  )
}
