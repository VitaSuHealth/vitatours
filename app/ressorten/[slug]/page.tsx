import ContactLinks from '@/app/_components/ContactLinks'
import FormSection from '@/app/_components/FormSection'
import {ImLocation2} from 'react-icons/im'
import { TfiGallery } from "react-icons/tfi";
import { TbFileDescription } from "react-icons/tb";




import { client } from '@/app/_lib/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ContentfulRessortObject from '@/app/_types/ContentfulRessortObject';
import Questions from '@/app/_components/Questions';
import RessortSlider from '@/app/_components/RessortSlider';
import SwiperComponent from '@/app/_components/SwiperComponent';
import IFrame from '@/app/_components/IFrame';
import GalleryImageContainer from '@/app/_components/GalleryImageContainer';

const getRessort = async (slug: string) => {
    const res = await client.getEntries({content_type:'ressort', 'fields.slug': slug});
    const ressort  = res.items[0];
     return ressort;
}


export default async function page({params}: { params: { slug: string } }) {
  const {slug} = params;
  const ressort : ContentfulRessortObject = await getRessort(slug);
  
  const {naam, district, gallerij, beschrijving, locatie} = ressort.fields;
    
  //Footer Questions
    const q4: string = 'Wilt U Dit Ressort Bezoeken?'

  //Form section heading
    const heading: string = 'Of Maak Contact Via Ons Formulier'

  return (
    <div id='ressort-details'>
      <div className="container">
          <div className="header">
            <p className="name">
              {naam}
            </p>
            <div className="location-container">
              <ImLocation2 className='ressort-details-i'/>
              <h4 className="location">
                {`${district.fields.naam}, Suriname`}
              </h4>
            </div>
          </div>
          <RessortSlider >
            <SwiperComponent gallerij = {gallerij}/>
          </RessortSlider>
          <div className="beschrijving">
            <div className="details-heading">
              <TbFileDescription className='details-i'/>
              <h3 className="name">Beschrijving:</h3>
              
            </div>
            <div className="content">
                {documentToReactComponents(beschrijving)}
              </div>
          </div>

          <div className="locatie">
            <div className="details-heading">
              <ImLocation2 className='details-i'/>
              <h3 className="name">Locatie:</h3>
            </div>
            <div className="content">
              <IFrame src={locatie}/>
            </div>
          </div>

          <div className="gallerij">
            <div className="details-heading">
              <TfiGallery className='details-i'/>
              <h3 className="name">Gallerij:</h3>
            </div>
              <GalleryImageContainer gallerij={gallerij}/>
          </div>
        <Questions q4={q4}/>
        <ContactLinks contactLink={false}/>
      </div>
      <FormSection heading={heading} showSocials={false} subject={naam}/>
    </div>
  )
}