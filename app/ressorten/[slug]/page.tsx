import ContactLinks from '@/app/_components/ContactLinks'
import FormSection from '@/app/_components/FormSection'
import {ImLocation2} from 'react-icons/im'


import { client } from '@/app/_lib/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ContentfulRessortObject from '@/app/_types/ContentfulRessortObject';
import ContentfulImage from '@/app/_types/ContentfulImage';
import GalleryImage from '@/app/_components/GalleryImage';
import Questions from '@/app/_components/Questions';
import RessortSlider from '@/app/_components/RessortSlider';
import IFrame from '@/app/_components/IFrame';
import SwiperComponent from '@/app/_components/SwiperComponent';

const getRessort = async (slug: string) => {
    const res = await client.getEntries({content_type:'ressort', 'fields.slug': slug});
    const ressort  = res.items[0];
     return ressort;
}


export default async function page({params}: { params: { slug: string } }) {
  const {slug} = params;
  const ressort : ContentfulRessortObject = await getRessort(slug);


  const {naam, district, gallerij, beschrijving, locatie} = ressort.fields;
    const coverImage : ContentfulImage = gallerij[0];

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
                <ImLocation2 className='details-i'/>
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
                <IFrame src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3969.2614282336895!2d-55.181184!3d5.8187064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d09cb27550a2e41%3A0xc50b869ebf7562a!2sMadeliefjes%20Straat%2C%20Paramaribo!5e0!3m2!1snl!2s!4v1700058273189!5m2!1snl!2s'/>
              </div>
            </div>

            <div className="gallerij">
              <div className="details-heading">
                <ImLocation2 className='details-i'/>
                <h3 className="name">Gallerij:</h3>
              </div>
              <div className="gallery-image-container content">
                {gallerij.map( afbeelding  => (
                    <GalleryImage image={afbeelding} key={afbeelding.fields.file.fileName}/>
                ))
                }
              </div>
            </div>
          <Questions/>
          <ContactLinks/>
          <FormSection/>
        </div>
    </div>
  )
}