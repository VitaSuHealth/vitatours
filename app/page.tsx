import {client} from "@/app/_lib/client"

import ContactLinks from "./_components/ContactLinks";
import Questions from "./_components/Questions";
import ServicesPreview from "./_components/ServicesPreview";
import RessortCards from "./_components/RessortCards";
import RessortSlider from "./_components/RessortSlider";
import SwiperComponent from "./_components/SwiperComponent";
import ContentfulRessortObject from "./_types/ContentfulRessortObject";
import type { Metadata } from 'next'
import OverOnsIntro from "./_components/OverOnsIntro";
 
export const metadata: Metadata = {
  title: 'Vita Tours - Home',
  description: 'Vita Tours - Home',
  openGraph: {
    title: `Vita Tours- Home`,
    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitahealth.sr%2F&psig=AOvVaw0Ummre69IhdHXm4UyZCnHS&ust=1701542198029000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiev-Tw7oIDFQAAAAAdAAAAABAH",
        width: 1200,
        height: 630,
        alt: `Vita Tours  image`
      }
    ],
  },
}


const getRessorts = async () => {
  const result = await client.getEntries({ content_type: "ressort" });
  const items = await result.items;
  // console.log(items)
  return items;
};


export default async function Home() {
  const ressorten : ContentfulRessortObject[] = await getRessorts();
  
  
  //Footer Questions
  const q1: string = 'Heb je een vraag over wat wij aanbieden?'
  const q2: string = 'Of'
  const q3: string = 'Wilt u nog meer info over de ressorten?'
  const q4: string = 'Aarzel niet en neem contact op met ons.'
  
  return (
    <main className=''>
      <div className="container">
        <RessortSlider>
          <SwiperComponent ressorten={ressorten}/>
        </RessortSlider>
        <OverOnsIntro/>
        <ServicesPreview/>
        <RessortCards/>
        <Questions q1={q1} q2={q2} q3={q3} q4={q4}/>
        <ContactLinks/>
      </div>
    </main>
  )
}
