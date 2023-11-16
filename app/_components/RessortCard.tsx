import ContentfulImage from '../_types/ContentfulImage';
import ContentfulRessortObject from '../_types/ContentfulRessortObject'
import Image from 'next/image'
import Link from 'next/link';
import {ImLocation2} from 'react-icons/im'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export default function RessortCard({ressort}: {ressort: ContentfulRessortObject}) {
    const {slug, naam, district, gallerij, beschrijving} = ressort.fields;
    const coverImage : ContentfulImage = gallerij[0];
  return (
    <div className='ressort-card'>
        <div className="afbeelding">
            <Image src={`https:` + coverImage.fields.file.url}
            width="1000"
            height='1000'
            alt={naam} 
            placeholder="blur"
            blurDataURL={'/logo.png'}
            priority={true}
            />
        </div>
        <div className="text">
            <h3 className='text-header'>{naam}</h3>
            <div className="district-container">
                <ImLocation2 className='district-i'/>
                <p className='district'>{district.fields.naam}</p>
            </div>
            <div className="beschrijving">
                {documentToReactComponents(beschrijving)}
            </div>
        </div>
        <div className="cta-card">
            <Link href={`/ressorten/${slug}`} className="main-btn">Ressort Bekijken </Link>
        </div>
    </div>
  )
}
