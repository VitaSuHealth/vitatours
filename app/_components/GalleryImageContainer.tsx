'use client'
import ContentfulImage from '../_types/ContentfulImage'
import GalleryImage from './GalleryImage'
import { useState } from "react";
import ImageModal from './ImageModal';

export default function GalleryImageContainer({gallerij}: {gallerij : ContentfulImage[]}) {

    const [clickedImg, setClickedImg] = useState<ContentfulImage | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number | undefined>();

    const handleClick = (image: ContentfulImage, index: number) => {
        setCurrentIndex(index);
        setClickedImg(image);
    };

  const handelRotationRight = () => {
    const totalLength = gallerij.length;
    if (currentIndex! + 1 >= totalLength) {
      setCurrentIndex(0);
      const newActiveImage = gallerij[0];
      setClickedImg(newActiveImage);
      return;
    }

    const newIndex = currentIndex! + 1;
    const newActiveImage = gallerij.filter((item) => {
      return gallerij.indexOf(item) === newIndex;
    });

    const activeImage = newActiveImage[0];
    setClickedImg(activeImage);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = gallerij.length;
    if (currentIndex === 0) {
        setCurrentIndex(totalLength - 1);
        const newActiveImage = gallerij[totalLength - 1];
        setClickedImg(newActiveImage);
      return;
    }

    const newIndex = currentIndex! - 1;
    const newActiveImage = gallerij.filter((item) => {
      return gallerij.indexOf(item) === newIndex;
    });

    const activeImage = newActiveImage[0];
    setClickedImg(activeImage);
    setCurrentIndex(newIndex);
  };


  return (
    <div className="gallery-image-container content">
        {gallerij.map( (afbeelding, index)  => (
            <div className='gallery-img-wrapper' key={afbeelding.fields.file.fileName}>
                <GalleryImage image={afbeelding} OnClickHandler={()=> handleClick(afbeelding, index)}/>
            </div>
        ))
        }
        {clickedImg && 
            <ImageModal clickedImg={clickedImg} setClickedImg={setClickedImg } handelRotationLeft={handelRotationLeft} handelRotationRight={handelRotationRight}/>
        }
    </div>
  )
}
