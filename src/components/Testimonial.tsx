import React, { useEffect, useState } from 'react';
import { GrPrevious, GrNext } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import NavButtons from './NavButtons';

interface Post {
    id: number;
    title: string;
    body: string;
}

const Testimonial: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 9))); // Get the first 100 posts
    }, []);

    return (
        <div className='testimonial-section py-4'>
            <div className="container">
                <div className="row">
                    <div className="testimonial col-12 col-md-6 col-lg-6">
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h2>Testimonial</h2>
                                </div>

                                <div className='navigat-button d-flex col-12 col-md-6 '>
                                    <div className="prevtest px-1">
                                        <NavButtons inTextBtn={<GrPrevious />} shekil={''} klassadi={'Testimonial-prev'} />
                                    </div>
                                    <div className="next-test px-1">
                                        <NavButtons inTextBtn={<GrNext />} shekil={''} klassadi={'Testimonial-next'} />
                                    </div>
                                </div>

                                <div className="swiper-tesimonial py-5">
                                    <Swiper
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Autoplay, Navigation]}
                                        navigation={{
                                            nextEl: '.Testimonial-next',
                                            prevEl: '.Testimonial-prev',
                                        }}
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        loop={true}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='testi-card '>
                                                <div className="testi-image d-flex flex-row">
                                                    <img className='testi-imagee' src="/assets/images/testimonial/testimonial1.webp" alt="" />
                                                    <div className='testi-posts'>
                                                        <div className="post-box d-flex flex-column px-5">
                                                            <p><b>Lawyer Base just saved my life!
                                                            </b>
                                                            </p>
                                                            <p className='testimonial-paragraf'>Aenean lacinia bibendum nulla sed cons ectetur. Morbi leo risus, porta ac conse ctet ur ac, vesti bulum at eros. Etiam porta sem mal esuada magna mollis euismod. Etiam porta sem malesuada magna mo llis eu. Donec ullamcorper nulla non metus auctor.</p>
                                                            <span className='Oliver-shansder  py-2'>Oliver Shansder</span>
                                                            <span>Father of two sons</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='testi-card '>
                                                <div className="testi-image d-flex flex-row">
                                                    <img className='testi-imagee' src="/assets/images/testimonial/testimonial2.webp" alt="" />
                                                    <div className='testi-posts'>
                                                        <div className="post-box d-flex flex-column px-5">
                                                            <p><b>I got my money back!
                                                            </b>
                                                            </p>
                                                            <p className='testimonial-paragraf'>Aenean lacinia bibendum nulla sed cons ectetur. Morbi leo risus, porta ac conse ctet ur ac, vesti bulum at eros. Etiam porta sem mal esuada magna mollis euismod. Etiam porta sem malesuada magna mo llis eu. Donec ullamcorper nulla non metus auctor.</p>
                                                            <span className='Oliver-shansder  py-2'>Santana White</span>
                                                            <span>Car Accidents</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='testi-card '>
                                                <div className="testi-image d-flex flex-row">
                                                    <img className='testi-imagee' src="/assets/images/testimonial/testimonial3.webp" alt="" />
                                                    <div className='testi-posts '>
                                                        <div className="post-box d-flex flex-column px-5 ">
                                                            <p><b>Now I can get my business running!
                                                            </b>
                                                            </p>
                                                            <p className='testimonial-paragraf'>Aenean lacinia bibendum nulla sed cons ectetur. Morbi leo risus, porta ac conse ctet ur ac, vesti bulum at eros. Etiam porta sem mal esuada magna mollis euismod. Etiam porta sem malesuada magna mo llis eu. Donec ullamcorper nulla non metus auctor.</p>
                                                            <span className='Oliver-shansder py-2'>James Bond</span>
                                                            <span>Financial Issue</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="api-news col-12 col-md-6 col-lg-6">
                        {posts.map(post => (
                            <div className="recent-news  py-5">
                                <div className="news d-flex ">
                                    <div className="news-left-side news-date-box d-flex flex-column ">
                                        <span className="blog-date-day "><b>21</b></span>
                                        <span className="blog-date-month">Mar</span>
                                    </div>

                                    <div className="news-right-side">
                                        <h4 className='h4news'>{post.body}</h4>
                                        <p>{post.title}</p>
                                        <a className='text-decoration-none anews' href="">Read News <FaLongArrowAltRight/></a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
