'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import Imagem1 from './imagens/Imagem1';
import Imagem2 from './imagens/Imagem2';

const images = [
    '/Group 8.png',
    '/concept1-sd-b.jpg',
    '/concept2-sd-b.jpg',
    '/concept1-sd-b.jpg'
];

const Carousel = () => {
  return (
    <div className="w-full h-[210px]">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper w-[96%] h-full rounded-3xl"
      >
          <SwiperSlide key={1} className="w-9/12 h-full">
            <Imagem1/>
          </SwiperSlide>
          <SwiperSlide key={2} className="w-9/12 h-full">
            <Imagem2/>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;