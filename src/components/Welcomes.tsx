// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, EffectFade,  Navigation } from 'swiper/modules';
import Button from './Button';

export default function App() {
  return (
    <div className='mt-5'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="introduction ">
                        {/* Buraya introduction içeriğinizi ekleyin */}
                        <h3 className='text-center Welcome-h3 py-5 '>WELCOME TO</h3>
                        <h1 className='text-center text-white'>ATTORNA</h1>
                        <p className='text-center container text-white py-5 '>We are leading law firm <br /> in financial & business industry . <br /> With more than 20 years of experience</p>
                        <Button inTextBtn="CONTACT NOW" shekil="" klassadi="contact-now my-5"  />

                    </div>
</SwiperSlide>

<SwiperSlide>
                    <div className="introduction2">
                    <h3 className='text-center professional-h3 py-5 '>PROFFESIONAL</h3>
                        <h1 className='text-center text-white '>LAW FIRM</h1>
                        <p className='text-center text-white container py-5 '>We are leading law firm <br /> in financial & business industry . <br /> With more than 20 years of experience</p>
                        <Button inTextBtn="CONTACT NOW" shekil="" klassadi="contact-now my-5 " />

                    </div>
                </SwiperSlide>

        
      </Swiper>
    </div>
  );
}
