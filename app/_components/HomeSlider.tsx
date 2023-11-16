import React from 'react'
import Questions from '../_components/Questions'
import ContactLinks from '../_components/ContactLinks'
import RessortGridCard from '../_components/RessortGridCard'
import { client } from '@/app/_lib/client';
import ContentfulRessortObject from '../_types/ContentfulRessortObject';
import GalleryImage from './GalleryImage';


const getRessorts = async () => {
  const res = await client.getEntries({content_type:'ressort'});
  const ressorten  = await res.items;
   return ressorten;
}
export default async function HomeSlider() {
const ressorten : ContentfulRessortObject[] = await getRessorts();
const rs = ressorten[0];
const gallerij = rs.fields.gallerij[0];
    return (
    <div id='home-slider' className='slider'>
        <GalleryImage image={gallerij} key={gallerij.fields.file.fileName}/>
    </div>
    )
}
