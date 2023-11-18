'use client'

import ContentfulImage from '../_types/ContentfulImage'
import Image from 'next/image'

export default function GalleryImage({image, index, OnClickHandler}:{image:ContentfulImage, index?: number, OnClickHandler? : any}) {
  const handleClick = (image : ContentfulImage, index: number) => {
    OnClickHandler(image, index);
  }

  return (
      <Image  className= 'gallery-img' src={`https:` + image.fields.file.url}
          width="1000"
          height='1000'
          alt={image.fields.title} 
          placeholder="blur"
          blurDataURL={'/logo.png'}
          priority={true}
          onClick={() => handleClick(image, index!)}
      />
  )
}
