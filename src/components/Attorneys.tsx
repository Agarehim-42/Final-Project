import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Attorney from './Attorney';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';
import NavButtons from './NavButtons';
import { GrPrevious, GrNext } from 'react-icons/gr';

interface Attorney {
    title: string;
    image: string;
    body: string;
    head: string;
}

const Attorneys: React.FC = () => {
    const [attorney, setAttorney] = useState<Attorney[]>([]);

    useEffect(() => {
        axios.get("src/attorney.json")
            .then(response => setAttorney(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='Attorney-section py-5 d-flex flex-column'>
            <div className="container">
                <div className='meet-our-attorneys'>
                    <h1 className='d-flex justify-content-center align-items-center'><b>Meet Our Attorneys</b></h1>
                </div>

                <div className='navigation-button d-flex'>
                    <div className="prev-test px-1">
                        <NavButtons inTextBtn={<GrPrevious />} shekil={''} klassadi={'Attorney-prev'} />
                    </div>
                    <div className="next-test px-1">
                        <NavButtons inTextBtn={<GrNext />} shekil={''} klassadi={'Attorney-next'} />
                    </div>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
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
                    modules={[ Autoplay, Navigation]} // Add Navigation module
                    navigation={{
                        nextEl: '.Attorney-next',
                        prevEl: '.Attorney-prev',
                    }}
                    className="mySwiper py-5"
                >
                    {attorney.map((attorneyItem, index) => (
                        <SwiperSlide key={index}>
                            <Attorney 
                                attorneyTitle={attorneyItem.title} 
                                attorneyImage={attorneyItem.image} 
                                attorneyBody={attorneyItem.body} 
                                attorneyHead={attorneyItem.head} 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Attorneys;
