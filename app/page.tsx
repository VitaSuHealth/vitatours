import {client} from "@/app/_lib/client"

import ContactLinks from "./_components/ContactLinks";
import Questions from "./_components/Questions";
import Samenwerking from "./_components/Samenwerking";
import ServicesPreview from "./_components/ServicesPreview";
import RessortCards from "./_components/RessortCards";
import RessortSlider from "./_components/RessortSlider";
import SwiperComponent from "./_components/SwiperComponent";
import ContentfulRessortObject from "./_types/ContentfulRessortObject";

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
        <Samenwerking showHeader={true}/>
        <ServicesPreview/>
        <RessortCards/>
        <Questions q1={q1} q2={q2} q3={q3} q4={q4}/>
        <ContactLinks/>
      </div>
    </main>
  )
}
