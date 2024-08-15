import React, { useState, useEffect } from 'react';
import Blog from './Blog'
import axios from 'axios';
import { Swiper,  SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { CiClock1 } from 'react-icons/ci';
import { GoFileDirectoryFill } from 'react-icons/go';
import { IoMdContact } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';


import { FaSearch } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";







interface Blog {
    image: string;
    body: string;
    head: string;
    time: string;
    message:number;
    file:string;
    contact:string;
    read:string;
    
}

const Blogs: React.FC = () => {
    const [blog, setBlog] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get("src/blog.json")
            .then(response => setBlog(response.data))
            .catch(err => console.log(err));
    }, []);
  return (
    <div className='mt-5'>
            <div className='about-us-picture'>
                <h3 className='text-center About-us-h3 text-white'>Blog</h3>
                <h4 className='text-center example-h4'>Example Of About Page</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="blog-left-side col-12 col-md-6  ">
                    {blog.map((blogItem, index) => (
                        
                            <Blog key={index}
                                blogImage={blogItem.image} 
                                blogBody={blogItem.body} 
                                blogHead={blogItem.head} 
                                blogTime={blogItem.time}
                                blogMessage={blogItem.message}
                                blogContact={blogItem.contact}
                                blogFile={blogItem.file}
                                blogRead={blogItem.read}

                            />
                        
                    ))}
                   <div className='swiper-blog py-5'>
  <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    }}
    modules={[Navigation, EffectFade ,  Pagination]} // Removed EffectFade from modules
    className="mySwiper"
  >
    <SwiperSlide className='blog-swiper py-'>
      <img className='men-pen-blog w-100' src="assets/images/blog/blog7.webp" alt="Blog 4" />
    </SwiperSlide>
    <SwiperSlide className='blog-swiper'>
      <img className='men-pen-blog w-100' src="assets/images/blog/blog4.webp" alt="Blog 4" />
    </SwiperSlide>
    <SwiperSlide className='blog-swiper'>
      <img className='men-pen-blog w-100' src="assets/images/blog/blog5.webp" alt="Blog 5" />
    </SwiperSlide>
  </Swiper>
  <div className="card-body py-4">
    <h2 className='py-2'><b>Gallery Post Format Title</b></h2>
    <div className="d-flex align-items-center row">
      <div className="col-12 col-lg-3 col-md-6"><p><CiClock1 className='mx-2'/>13 Nov 2013</p></div>
      <div className="col-12 col-lg-3 col-md-6"><p><IoMdContact className='mx-2'/>John Doe</p></div>
      <div className="col-12 col-lg-3 col-md-6"><p><MdOutlineMessage className='mx-2'/>2</p></div>
      <div className="col-12 col-lg-3 col-md-6"><p><GoFileDirectoryFill className='mx-2'/>Blog, Life Style, News Article</p></div>
    </div>
    <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipisici elit...</p>
    <h6 className='h6-read-blog'>Read More</h6>
  </div>
</div>

                    <div className="music-blog py-5">
                       <audio className='w-100' controls src="/assets/images/blog/music.mp3"></audio>
                       
                       <div className="card-body py-2" >
                    <h2 className='py-2'><b>Audio Post Format</b></h2>
                    <div className="d-flex align-items-center row">
                      <div className="col-12 col-lg-3 col-md-6"> <p className=''><CiClock1 className='mx-2'/> 13 Nov 2013 </p></div>
                      <div className="col-12 col-lg-3 col-md-6">  <p className='px-'><IoMdContact className='mx-2'/>John Doe</p></div>
                      <div className="col-12 col-lg-3 col-md-6"><p className=''><MdOutlineMessage className='mx-2'/>2</p></div>
                      <div className="col-12 col-lg-3 col-md-6"> <p className='px-'><GoFileDirectoryFill className='mx-2'/> Audio, Blog</p></div>
                   
                    </div>
                    <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa...</p>
                    <h6 className='h6-read-blog'>Read More</h6>
                    </div>

                </div>
                <div className="blog-swiper2 py-5">
                <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='blog-swiper'>
          <img className='  w-100 ' src="assets/images/blog/blog6.webp" />
        </SwiperSlide>
        <SwiperSlide className='blog-swiper'>
          <img className='   w-100' src="assets/images/blog/blog7.webp" />
        </SwiperSlide>
        <SwiperSlide className='blog-swiper'>
          <img className='   w-100' src="assets/images/blog/blog8.webp" />
        </SwiperSlide>
        <SwiperSlide className='blog-swiper'>
          <img className='  w-100  ' src="assets/images/blog/blog9.webp" />
        </SwiperSlide>
        <SwiperSlide className='blog-swiper'>
          <img className='  w-100 ' src="assets/images/blog/blog10.webp" />
        </SwiperSlide>
        <SwiperSlide className='blog-swiper'>
          <img  className=' w-100' src="assets/images/blog/blog11.webp" />
        </SwiperSlide>
        <SwiperSlide className='blog-swiper'>
          <img className='  w-100' src="assets/images/blog/blog12.webp" />
        </SwiperSlide>
        <SwiperSlide className='blog-swiper'>
          <img className=' w-100' src="assets/images/blog/blog13.webp" />
        </SwiperSlide>
      </Swiper>
     
      <div className="card-body" >
                    <h2 className='py-2'><b>Gallery Post Format Title</b></h2>
                    <div className="d-flex align-items-center row">
                      <div className="col-12 col-lg-3 col-md-6"> <p className=''><CiClock1 className='mx-2'/> 13 Nov 2013 </p></div>
                      <div className="col-12 col-lg-3 col-md-6">  <p className='px-'><IoMdContact className='mx-2'/>John Doe</p></div>
                      <div className="col-12 col-lg-3 col-md-6"><p className=''><MdOutlineMessage className='mx-2'/>2</p></div>
                      <div className="col-12 col-lg-3 col-md-6"> <p className='px-'><GoFileDirectoryFill className='mx-2'/> Blog, Life Style, News Article</p></div>
                   
                    </div>
                    <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa...</p>
                    <h6 className='h6-read-blog'>Read More</h6>
                    </div>

                    <div className="blog-box py-5">
                      <div className="blog-box-in">
                        <p>This is just aside format. Nulla vitae elit libero, ahaetrdfaugue. Vestibulum id ligula porta felis euismod semper.Fuiscedr pibus, tellus ac tortor mauris.</p>
                      </div>
                    </div>

                    <div className="video-blog-yt py-5"> 
                      <iframe className='w-100' width="560" height="315" src="https://www.youtube.com/embed/occycDAXmAA?si=kacu3Ajv32_g6Nnw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                      <div className="card-body" >
                    <h2 className='py-2'><b>Video Post Format</b></h2>
                    <div className="d-flex align-items-center row">
                      <div className="col-12 col-lg-3 col-md-6"> <p className=''><CiClock1 className='mx-2'/> 11 Nov 2013 </p></div>
                      <div className="col-12 col-lg-3 col-md-6">  <p className='px-'><IoMdContact className='mx-2'/>John Doe</p></div>
                      <div className="col-12 col-lg-3 col-md-6"><p className=''><MdOutlineMessage className='mx-2'/>1</p></div>
                      <div className="col-12 col-lg-3 col-md-6"> <p className='px-'><GoFileDirectoryFill className='mx-2'/> Blog, Video</p></div>
                   
                    </div>
                    <p className="card-text py-3">Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa...</p>
                    <h6 className='h6-read-blog'>Read More</h6>
                    </div>
                      </div>

                </div>
      
                    
                    </div>

                   
           <div className="blog-right-side col-12 col-md-6 ">
      <div className="search-blog py-5">
        <form className="comment-form">
          <div className="form-group search-input-container">
            <input  
              type="text"
              id="name"
              name="name"
              placeholder="Type Keywords... "
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
        </form>
      </div>

      <div className="text-widget-blog py-3 px-2">
        <h6 className='text-widget-ff py-2'><b>Text Widget</b>
        </h6>
        <p>Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </div>

      <div className='practice-widget-blog px-2 py-3'>
      <h6 className='text-widget-ff py-2'><b>Practice Widget</b>
      <div className="practice-blog-cards py-4">
        <div className="card-blog-1 py-3">
          <div className="d-flex">
          <div className='left-side-card-blog'>
         <img src="/assets/images/blog/blog14.webp" alt="" />
          </div>
          <div className='right-side-card-blog px-3'></div>
          <div className='d-flex flex-column'>
          <h5 className='py-4'><b>Bank And Financial</b></h5>
          <h6 className='learn-more-blog'>Learn More <FaLongArrowAltRight/></h6>
          </div>
          

          </div>
        </div>
        <div className="card-blog-1 py-3">
          <div className="d-flex">
          <div className='left-side-card-blog'>
         <img src="/assets/images/blog/blog15.webp" alt="" />
          </div>
          <div className='right-side-card-blog px-3'></div>
          <div className='d-flex flex-column'>
          <h5 className='py-4'><b>Bank And Financial</b></h5>
          <h6 className='learn-more-blog'>Learn More <FaLongArrowAltRight/></h6>
          </div>
          

          </div>
        </div>
        <div className="card-blog-1 py-3">
          <div className="d-flex">
          <div className='left-side-card-blog'>
         <img src="/assets/images/blog/blog16.webp" alt="" />
          </div>
          <div className='right-side-card-blog px-3'></div>
          <div className='d-flex flex-column'>
          <h5 className='py-4'><b>Bank And Financial</b></h5>
          <h6 className='learn-more-blog'>Learn More <FaLongArrowAltRight/></h6>
          </div>
          

          </div>
        </div>
        <div className="card-blog-1 py-3">
          <div className="d-flex">
          <div className='left-side-card-blog'>
         <img src="/assets/images/blog/blog17.webp" alt="" />
          </div>
          <div className='right-side-card-blog px-3'></div>
          <div className='d-flex flex-column'>
          <h5 className='py-4'><b>Bank And Financial</b></h5>
          <h6 className='learn-more-blog'>Learn More <FaLongArrowAltRight/></h6>
          </div>
          

          </div>
        </div>
      </div>
      </h6>
      </div>

      <div className='recent-comments-blog py-3'>
        <h6 className='text-widget-ff py-3'><b>Recent Comments</b></h6>
        <div className='d-flex flex-column'>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5>John Doe on <span className='span-blog-yazi'>Magna pars studiorum</span> </h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5>John Doe on  <span className='span-blog-yazi'>Eiusmod tempor incidunt</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5>John Doe on <span className='span-blog-yazi'>Eiusmod tempor incidunt</span>  </h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5>John Doe on <span className='span-blog-yazi'> Donec luctus imperdiet</span></h5>
        </div>
        </div>
      </div>
      <div className="tag-cloud-blog py-5">
        <h6 className='text-widget-ff py-3'><b>Tag Cloud</b></h6>
        <div className="tag-cloud d-flex flex-column">
          <div className="d-flex flex-row">
          <a href="">ANIMAL</a>
          <a href="">ASIDE</a>
          <a href="">AUDIO</a>
          <a href="">BLOG</a>
          </div>
          <div className="d-flex flex-row">
          <a href="">BUSINESS</a>
          <a href="">GALLERY THUMBNAIL</a>
          <a href="">IDENTITY</a>
          </div>
          <div className="d-flex flex-row">
          <a href="">LIFE STYLE</a>
          <a href="">LINK</a>
          <a href="">NEWS</a>
          <a href="">POST FORMAT</a>
          </div>
          <div className="d-flex flex-row">
          <a href="">QUOTE</a>
          <a href="">SAFARI</a>
          <a href="">TRAVEL</a>
          <a href="">VIDEO</a>
          </div>
          
        </div>

      </div>
      <div className='twitter-blog d-flex flex-column py-5'>
    <h6 className='text-widget-ff py-3'>Twitter</h6>
    <p><b>Could not authenticate you.</b></p>

      </div>
    </div>
                </div>
            </div>
        </div>
  )
}

export default Blogs