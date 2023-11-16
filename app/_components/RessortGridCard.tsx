import ContentfulImage from "../_types/ContentfulImage";
import ContentfulRessortObject from "../_types/ContentfulRessortObject";
import {ImLocation2} from 'react-icons/im'
import Image from 'next/image'
import Link from 'next/link';


export default function RessortGridCard({ressort}: {ressort: ContentfulRessortObject}) {
    const {naam, district, gallerij, slug} = ressort.fields;
    const images : ContentfulImage[] = gallerij;
    const imageLength = images.length;
    let gridImages : ContentfulImage[] = imageLength > 3 ? images.splice(0,4) : images;

  return (
    <div className="grid-card">
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
        <div className="ressort-gallery">
            {gridImages.map( (image, index)  => (
                <div className="grid-img" id={`img-${index}`} key={image.fields.file.url}>
                    <Image src={`https:` + image.fields.file.url}
                    width="1000"
                    height='1000'
                    alt={naam} 
                    placeholder="blur"
                    blurDataURL={'/logo.png'}
                    priority={true}
                    />
                </div>
                ))
            }
        </div>

        <div className="cta">
            <Link href={`/ressorten/${slug}`} className="secund-btn">Meer Zien </Link>
        </div>

    </div>
  )
}
