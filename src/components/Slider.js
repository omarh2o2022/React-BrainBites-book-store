import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
    delay: 4000,
    disableOnInteraction: false,
    loop : true
  }}
    >
      <SwiperSlide><img src='images/ramsey7.png' alt='' style={{width:"100%", height: "100%", marginTop:"20px"}}/></SwiperSlide>     
      <SwiperSlide><img src='images/fitn3.png' alt='' style={{width:"100%", height: "100%", marginTop:"20px"}}/></SwiperSlide>
      <SwiperSlide><img src='images/msc1.png' alt='' style={{width:"100%", height: "100%", marginTop:"20px"}}/></SwiperSlide>
      
    </Swiper>
  );
};

export default Slider;
