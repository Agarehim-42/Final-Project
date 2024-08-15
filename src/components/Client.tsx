
import { GrPrevious, GrNext } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import NavButtons from './NavButtons';

const Client: React.FC = () => {
    return (
        <div className='client-ection my-5 py-5'>
            <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center align-items-center py-5"> <h1>Some Of Our Clients</h1></div>
                <div className='navigation-button d-flex py-3  '>
                    <div className="prevtest px-1">
                        <NavButtons inTextBtn={<GrPrevious />} shekil={''} klassadi={'Client-prev'} />
                    </div>
                    <div className="next-test px-1">
                        <NavButtons inTextBtn={<GrNext />} shekil={''} klassadi={'Client-next'} />
                    </div>
                </div>
            </div>
            </div>
           

            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.Client-next',
                        prevEl: '.Client-prev',
                    }}
                    pagination={{
                        clickable: true,
                    }}
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
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },

                    }}

                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="d-flex justify-content-center aligin-items-center"><img src="./assets/images/clientss/clientimage1.webp" alt="" /></SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center aligin-items-center"><img src="./assets/images/clientss/clientimage2.webp" alt="" /></SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center aligin-items-center"><img src="./assets/images/clientss/clientimage3.webp" alt="" /></SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center aligin-items-center"><img src="./assets/images/clientss/clientimage4.webp" alt="" /></SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center aligin-items-center"><img src="./assets/images/clientss/clientimage5.webp" alt="" /></SwiperSlide>
                    <SwiperSlide className="d-flex justify-content-center aligin-items-center"><img src="./assets/images/clientss/clientimage6.webp" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Client