import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Consult2: React.FC = () => {
    return (
        <>
            <div className="container py-5">
                <div className="legal-areas text-center py-5">
                    <h2 className='text-dark py-4'><b>Legal Practice Areas</b></h2>
                    <div>
                        <a className='text-decoration-none a-practices-view' href="">View All Practices </a>
                        <FaLongArrowAltRight className='mx-2 arrow-alt-right' />
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper text-white"
                >
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card1 text-center">
                            <h4><b>Bank And Financial</b></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card2 text-center">
                            <h4><b>Car Accident</b></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card3 text-center">
                            <h4><b>Personal Injury</b></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card4 text-center">
                            <h4><b>Family Law</b></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card5 text-center">
                            <h4><b>Capital Market</b></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card6 text-center">
                            <h4><b>Employment Law</b></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card7 text-center">
                            <h4><b>Corporate</b></h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='consult2swip'>
                        <div className="consult-card8 text-center">
                            <h4><b>Dispute Resolution</b></h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Consult2;
