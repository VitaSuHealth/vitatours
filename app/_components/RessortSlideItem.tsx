'use client'
import { ImLocation2 } from "react-icons/im";
import ContentfulImage from "../_types/ContentfulImage";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";
import Link from "next/link";
import ContentfulDistrictObject from "../_types/ContentfulDistrictObject";

const contentfulImageLoader: ImageLoader = ({ src, width }: ImageLoaderProps) => {
    return `${src}?w=${width}`
  }
  
export default function RessortSlideItem({gallerijImg, title, link, district}:{gallerijImg: ContentfulImage, title?:string, link?:string, district?:ContentfulDistrictObject}) {
  return (
    <div className="slide-item">
         <Image className='banner-img' src={`https://${gallerijImg.fields.file.url}`}
            width="1000"
            height="600"
            alt='logo' 
            loader={contentfulImageLoader}
            placeholder="blur"
            blurDataURL={'/images/logo.ico'}
            priority={true}
        />
        {title &&
            <div className="cover">
                <div className="title">
                    <h1>
                    {title}    
                    </h1>
                </div>
                <div className="location-container">
                    <ImLocation2 className='ressort-details-i'/>
                    <h4 className="location">
                    {`${district?.fields.naam}, Suriname`}
                    </h4>
                </div>
                <div className="cta">
                    <Link href={`/ressorten/${link}`} className="secund-btn">Meer Zien </Link>
                </div>
            </div>
        }
    </div>
  )
}
