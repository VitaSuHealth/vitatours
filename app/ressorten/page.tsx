import React from 'react'
import Questions from '../_components/Questions'
import ContactLinks from '../_components/ContactLinks'
import RessortGridCard from '../_components/RessortGridCard'
import { client } from '@/app/_lib/client';
import ContentfulRessortObject from '../_types/ContentfulRessortObject';
import type { Metadata } from 'next'


const getRessorts = async () => {
  const res = await client.getEntries({content_type:'ressort'});
  const ressorten  = await res.items;
   return ressorten;
}

 
export const metadata: Metadata = {
  title: 'Vita Tours - Ressorten',
  description: 'Vita Tours - Ressorten',
  openGraph: {
    title: `Vita Tours- Ressorten`,
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitahealth.sr%2F&psig=AOvVaw0Ummre69IhdHXm4UyZCnHS&ust=1701542198029000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiev-Tw7oIDFQAAAAAdAAAAABAH",
        width: 1200,
        height: 630,
        alt: `Vita Tours Ressort  image`
      }
    ],
  },
}

export default async function page() {

  const ressorten : ContentfulRessortObject[] = await getRessorts();
  
    //Footer Questions
    const q1: string = 'Heb je een vraag over wat wij aanbieden?'
    const q2: string = 'Of'
    const q3: string = 'Wilt u nog meer info over de ressorten?'
    const q4: string = 'Aarzel niet en neem contact op met ons.'
    
  return (
    <div id='ressorten'>
        <div className="container">
        <div className="ressort-cards-container">
            {ressorten.map( ressort  => (
                <RessortGridCard ressort= {ressort} key={ressort.fields.slug}/>
            ))
            }
        </div>

        <Questions q1={q1} q2={q2} q3={q3} q4={q4}/>
          <ContactLinks/>
        </div>
    </div>
  )
}