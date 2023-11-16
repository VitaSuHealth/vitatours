import React from 'react'
import ContentfulImage from '../_types/ContentfulImage'
import Image from 'next/image'

export default function GalleryImage({image}:{image:ContentfulImage}) {
  return (
    <div className='gallery-img'>
        <Image src={`https:` + image.fields.file.url}
            width="1000"
            height='1000'
            alt={image.fields.title} 
            placeholder="blur"
            blurDataURL={'/logo.png'}
            priority={true}
        />
    </div>
  )
}
