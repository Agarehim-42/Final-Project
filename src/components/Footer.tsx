import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";











const Footer: React.FC = () => {
    return (
        <footer className="footbg text-white py-5">
            <div className="container">
                <div className="main row ">

                    <div className="adress py-3 col-12 col-md-6 col-lg-3">

                        <h3 className="text-light py- ">About Us</h3>
                        <div className="mail d-flex py-4">

                            <p className=" text-light">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta.</p>
                        </div>
                        <div className="footer-sosial-net d-flex">
                            <FaFacebookSquare className='px-2' />
                            <FaTwitterSquare className='px-2'/>
                            <FaLinkedin className='px-2'/>
                            <FaGooglePlusSquare className='px-2'/>
                            <FaPinterest className='px-2'/>
                            <FaFlickr className='px-2'/>


                        </div>


                    </div>

                    <div className="informations  py-3  col-12 col-md-6 col-lg-3">
                        <h3 className="information text-light py-">Recent News</h3>
                        <h6 className='py-4'>New Collection</h6>
                        <h6  className='py-'>About Store</h6>
                        <h6  className='py-4'>Contact Us</h6>
                        <h6  className='py-'>Latest News</h6>
                        <h6  className='py-4'>Our Sitemap</h6>
                    </div>


                    <div className="useful-links py-3 col-12 col-md-6 col-lg-3">
                        <h3 className="useful-link text-light py-">Contact Info</h3>
                        <p className='py-'>Address: 184 Main Collins Street <br /> West Victoria 8007</p>
                        <div className="phone-foot d-flex flex-row">
                        <FaPhoneAlt /> 
                        <p className='mx-3'>+994-55-848-51-74</p>
                        </div>
                        <div className="phone-foot d-flex flex-row">
                        <MdOutlinePhoneIphone  /> 
                        <p className='mx-3'>+994-55-848-51-74</p>
                        </div>
                        <div className="phone-foot d-flex  flex-row">
                        <CiMail  /> 
                        <p className='mx-3'>agabakhsh@gmail.com</p>
                        </div>
                        
                    </div>


                    <div className="about-stores py-3 col-12 col-md-6 col-lg-3">
                        <h3 className="about-store text-light py-2">Business Overview</h3>


                        <div className="phone-foot d-flex py-2  flex-row">
                        < FaAngleRight /> 
                        <p className='mx-3'>Attorneys</p>
                        </div>

                        <div className="phone-foot d-flex flex-row">
                        < FaAngleRight /> 
                        <p className='mx-3'>Practice Areas</p>
                        </div>

                        <div className="phone-foot d-flex  flex-row">
                        < FaAngleRight /> 
                        <p className='mx-3'>Careers</p>
                        </div>

                        <div className="phone-foot d-flex py-2 flex-row">
                        < FaAngleRight /> 
                        <p className='mx-3'>Honors & Awards</p>
                        </div>

                        <div className="phone-foot d-flex  flex-row">
                        < FaAngleRight /> 
                        <p className='mx-3'>Q & A</p>
                        </div>
                        

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer