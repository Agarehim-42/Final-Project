import React from 'react'
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaCircleNotch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import Button from '../components/Button';
import { FaPhoneAlt } from "react-icons/fa";











const AboutUs: React.FC = () => {
  return (
    <div className="about-us-opsi mt-5">
      <div className='about-us-picture'>
        <h3 className='text-center About-us-h3 text-white'>About Us</h3>
        <h4 className='text-center example-h4'>Example Of About Us Page</h4>
      </div>
    
      <div className="iphone5-reng py-5">
        <div className="row align-items-center container"> 
          <div className="iphone5-left-side col-12 col-md-6 d-flex justify-content-center"> 
            <img className='iphone5-phone-png' src="./assets/images/aboutus/Iphone5.webp" alt="" />
          </div>
          <div className="iphone5-right-side col-12 col-md-6">
            <div className="d-flex flex-column container py-4 px-2"> 
              <div className='d-flex align-items-center mb-2'> 
                <h3 className='text-center porta-h3 mb-0'>Condimentum Porta Aenean</h3>
                <FaArrowRotateRight className='mx-2' /> 
              </div>
              <p className='mb-0'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.
Etiam Justo Ullamcorper</p>
            </div>
            <div className="d-flex flex-column container py-4 px-2"> 
              <div className='d-flex align-items-center mb-2'> 
                <h3 className='text-center porta-h3 mb-0'>Dapibus Mattis Parturient</h3>
                <FaCircleNotch className='mx-2' /> 
              </div>
              <p className='mb-0'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.
Etiam Justo Ullamcorper</p>
            </div>
            <div className="d-flex flex-column container py-4 px-2"> 
              <div className='d-flex align-items-center mb-2'> 
                <h3 className='text-center porta-h3 mb-0'>Etiam Justo Ullamcorper</h3>
                <FaHeart className='mx-2' /> 
              </div>
              <p className='mb-0'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.
Etiam Justo Ullamcorper</p>
            </div>
            <div className="d-flex flex-column container py-4 px-2"> 
              <div className='d-flex align-items-center mb-2'> 
                <h3 className='text-center porta-h3 mb-0'>Inceptos Vulputate Fusce</h3>
                <BiSolidStar className='mx-2' /> 
              </div>
              <p className='mb-0'>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes.
Etiam Justo Ullamcorper</p>
            </div>
          </div>
        </div>
        </div>


        <div className="books container py-4">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
            <div className="Fa-Book-About"> <FaBook className='fa-book-color'/>
              </div>
              <h3 className='text-center'><b>Tortor Tellus Cras</b></h3>
              <p className='text-center'>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condi mentum nibh. Porta Aenean Adipiscing.</p>
           
            </div>
            <div className="col-12 col-md-6 col-lg-4">
            <div className="Fa-Book-About"> <CiBank className='fa-book-color'/>
              </div>
              <h3 className='text-center'><b>Dolor Fusce Ligula</b></h3>
              <p className='text-center'>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condi mentum nibh. Porta Aenean Adipiscing.</p>
           
            </div>
            <div className="col-12 col-md-6 col-lg-4">
            <div className="Fa-Book-About"> < FaCar className='fa-book-color'/>
              </div>
              <h3 className='text-center'><b>Inceptos Dolor Mollis</b></h3>
              <p className='text-center'>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condi mentum nibh. Porta Aenean Adipiscing.</p>
           
            </div>
          </div>
        </div>


      <div className='our-skills mt-5'>
          <div className="skill-png ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center py-5 ">
              <h3 className='text-white'>Story About US</h3>
              <p className='text-white'>Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna.
              
              </p>
              <Button inTextBtn="Learn More" shekil="" klassadi="contact-now my-5 " />
            </div> 

            <div className="col-12 col-md-12 col-lg-6 skillboxlar py-5">
              <li>
                <h3 className='text-white'>Banking & Financial</h3>
                <span className='bar'><span className='Banking-Financial'></span></span>
                </li>
              <li>
                <h3 className='text-white'>Corporate Issue</h3>
                <span className='bar'><span className='Corporate-Issue'></span></span>
                </li>
              <li>
                <h3 className='text-white'>Family Law</h3>
                <span className='bar'><span className='Family-Law'></span></span>
                </li>
              <li>
                <h3 className='text-white'>Real Estate</h3>
                <span className='bar'><span className='Real-Estate'></span></span>
                </li>
            </div>
            </div>
          </div>
          </div>
      </div>

      <div className="Commodo-tellus-section">
  <div className="Commodo-tellus-bg d-flex justify-content-center align-items-center py-5">
    <div className="container text-center">
      <h1 className='text-center text-white'>Commodo Tellus Sit Sem</h1>
      <p className='commodo-p-size text-center py-4 text-white'>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
      </p>
      
      <div className="d-flex align-items-center justify-content-center">
        <span className="line"></span>
        <FaPhoneAlt className='phone-commodo text-white mx-3'/>
        <span className="line"></span>
      </div>
    </div>
  </div>
</div>








     
      </div>
    
  )
}

export default AboutUs
