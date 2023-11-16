import React from 'react'
import Questions from '../_components/Questions'
import ContactLinks from '../_components/ContactLinks'
import RessortGridCard from '../_components/RessortGridCard'
import { client } from '@/app/_lib/client';
import ContentfulRessortObject from '../_types/ContentfulRessortObject';


const getRessorts = async () => {
  const res = await client.getEntries({content_type:'ressort'});
  const ressorten  = await res.items;
   return ressorten;
}

export default async function page() {
  const ressorten : ContentfulRessortObject[] = await getRessorts();
  return (
    <div id='ressorten'>
        <div className="container">
        <div className="ressort-cards-container">
            {ressorten.map( ressort  => (
                <RessortGridCard ressort= {ressort} key={ressort.fields.slug}/>
            ))
            }
        </div>

          <Questions/>
          <ContactLinks/>
        </div>
    </div>
  )
}