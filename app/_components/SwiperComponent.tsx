'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay, Scrollbar, A11y} from 'swiper/modules'
import ContentfulImage from '../_types/ContentfulImage'
import RessortSlideItem from './RessortSlideItem';
import ContentfulRessortObject from '../_types/ContentfulRessortObject';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';




export default function SwiperComponent({gallerij, ressorten}: {gallerij?: ContentfulImage[], ressorten?: ContentfulRessortObject[]}) {

  return (
    <Swiper
    // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log('slide change')}
          autoplay={{delay: 7000, pauseOnMouseEnter: true}}
          loop={true}
          >
            {gallerij && 
              gallerij.map(image => (
                  <SwiperSlide key={image.fields.file.fileName}>
                      <RessortSlideItem gallerijImg={image}/>
                  </SwiperSlide>
              ))
            
            }

            {ressorten && 
              ressorten.map((ressort, index) => (
                  <SwiperSlide key={ressort.fields.slug}>
                      <RessortSlideItem gallerijImg={ressort.fields.gallerij[index]} title={ressort.fields.naam} link={ressort.fields.slug} district={ressort.fields.district}/>
                  </SwiperSlide>
              ))
            
            }
      </Swiper>
  )
}
