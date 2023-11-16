import { client } from "../_lib/client";
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


export default async function Services() {
  const items : contentfulReturn[] = await getDiensten();
  const heading = await getHeading();
  const headerTekst = heading.tekst;

  return (
    <div id="services">
         <div className="heading">
            <h2 className="section-heading">
            {documentToReactComponents(headerTekst)}
            </h2>
        </div>
        <div className="columns">
            {items?.map( item  => (
                <ServiceCard service= {item} key={item.fields.slug} row={true}/>
            ))
            }
        </div>
    </div>
  )
}
