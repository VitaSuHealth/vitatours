import { client } from "../_lib/client";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ServiceCard from "./ServiceCard";
import contentfulReturn from "../_types/ContentfulReturn";

async function getDiensten () {
    const res = await client.getEntries({content_type:'diensten'});
    const items  = res.items;
     return items;
}

export default async function ServicesPreview() {
    const items : contentfulReturn[] = await getDiensten();
    // console.log(items[0].fields.afbeelding)
  return (
    <div id="services-preview">
         <div className="heading">
            <h2 className="section-heading">
                Uw Persoonlijke Assistent
            </h2>
        </div>
        <div className="columns">
            {items?.map( item  => (
                <ServiceCard service= {item} key={item.fields.slug}/>
            ))
            }
        </div>
        <div className="cta">
            <Link href={'/overons'} className="secund-btn">Meer Over Ons </Link>
        </div>


    </div>
  )
}
