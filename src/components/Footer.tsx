import React, { useEffect } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGooglePlusSquare, FaPinterest, FaFlickr, FaPhoneAlt, FaAngleRight } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out',
            once: true, 
        });
    }, []);
    return (
        <footer className="footbg text-white py-5">
            <div className="container">
                <div className="main row">
                    <div className="adress py-3 col-12 col-md-6 col-lg-3" data-aos="fade-right">
                        <h3 className="text-light py-3">About Us</h3>
                        <p className="text-light paragraf-opacitys">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta.</p>
                        <div className="footer-sosial-net d-flex">
                            <FaFacebookSquare className='px-2' />
                            <FaTwitterSquare className='px-2'/>
                            <FaLinkedin className='px-2'/>
                            <FaGooglePlusSquare className='px-2'/>
                            <FaPinterest className='px-2'/>
                            <FaFlickr className='px-2'/>
                        </div>
                    </div>

                    <div className="informations py-3 col-12 col-md-6 col-lg-3" data-aos="fade-right">
                        <h3 className="information text-light py-3">Recent News</h3>
                        <div className="phone-foot d-flex py-2">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <h6 className='mx-3 paragraf-opacitys'>Sem Porta Mollis Parturient</h6>
                        </div>
                        <div className="phone-foot d-flex py-2">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <h6 className='mx-3 paragraf-opacitys'>Nullam Lorem Mattis Purus</h6>
                        </div>
                        <div className="phone-foot d-flex py-2">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <h6 className='mx-3 paragraf-opacitys'>Nibh Sem Sit Ullamcorper</h6>
                        </div>
                        <div className="phone-foot d-flex py-2">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <h6 className='mx-3 paragraf-opacitys'>Donec luctus imperdiet</h6>
                        </div>
                        <div className="phone-foot d-flex py-2">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <h6 className='mx-3 paragraf-opacitys'>Magna pars studiorum</h6>
                        </div>
                    </div>

                    <div className="useful-links py-3 col-12 col-md-6 col-lg-3" data-aos="fade-left">
                        <h3 className="useful-link text-light py-3">Contact Info</h3>
                        <p className='paragraf-opacitys'>Address: 184 Main Collins Street <br /> West Victoria 8007</p>
                        <div className="phone-foot d-flex">
                            <FaPhoneAlt /> 
                            <p className='mx-3 paragraf-opacitys'>+994-55-848-51-74</p>
                        </div>
                        <div className="phone-foot d-flex">
                            <MdOutlinePhoneIphone /> 
                            <p className='mx-3 paragraf-opacitys'>+994-55-848-51-74</p>
                        </div>
                        <div className="phone-foot d-flex">
                            <CiMail /> 
                            <p className='mx-3 paragraf-opacitys'>agabakhsh@gmail.com</p>
                        </div>
                    </div>

                    <div className="about-stores py-3 col-12 col-md-6 col-lg-3" data-aos="fade-left">
                        <h3 className="about-store text-light py-3">Business Overview</h3>
                        <div className="phone-foot d-flex">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <p className='mx-3 paragraf-opacitys'>Attorneys</p>
                        </div>
                        <div className="phone-foot d-flex">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <p className='mx-3 paragraf-opacitys'>Practice Areas</p>
                        </div>
                        <div className="phone-foot d-flex">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <p className='mx-3 paragraf-opacitys'>Careers</p>
                        </div>
                        <div className="phone-foot d-flex">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <p className='mx-3 paragraf-opacitys'>Honors & Awards</p>
                        </div>
                        <div className="phone-foot d-flex">
                            <FaAngleRight className='paragraf-opacitys' /> 
                            <p className='mx-3 paragraf-opacitys'>Q & A</p>
                        </div>

                    
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
