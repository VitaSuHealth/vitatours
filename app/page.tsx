import {client} from "@/app/_lib/client"

import ContactLinks from "./_components/ContactLinks";
import Questions from "./_components/Questions";
import Samenwerking from "./_components/Samenwerking";
import ServicesPreview from "./_components/ServicesPreview";
import RessortCards from "./_components/RessortCards";
import HomeSlider from "./_components/HomeSlider";
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
  return (
    <main className=''>
      <div className="container">
        <RessortSlider>
          <SwiperComponent ressorten={ressorten}/>
        </RessortSlider>
        <Samenwerking/>
        <ServicesPreview/>
        <RessortCards/>
        <Questions/>
        <ContactLinks/>
      </div>
    </main>
  )
}
