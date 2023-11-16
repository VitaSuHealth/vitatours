'use client'
import ContentfulImage from "../_types/ContentfulImage";
import Image from "next/image";
import Link from "next/link";
import ContentfulRessortObject from "../_types/ContentfulRessortObject";

export default function HomeSlideItem({ressort}:{ressort: ContentfulRessortObject}) {
  return (
    <div className="slide-item">
         <Image className='banner-img' src={`https://${gallerijImg.fields.file.url}`}
            width="1000"
            height='600'
            alt='logo' 
            placeholder="blur"
            blurDataURL={'/logo.png'}
            priority={true}
        />
    </div>
  )
}
