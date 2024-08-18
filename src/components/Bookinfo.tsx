import React , {useEffect} from 'react'
import { FaBook } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bookinfo: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);
    return (
        <div className=' book-info'>
            <div className="row">
                <div className="bookinfo-left-side py-5 col-12 col-md-6 py-3" data-aos="fade-right">
                    <div className="row container">
                        <div className=" d-flex justify-content-center align-items-center">
                            <FaBook className='bookicon text-white' />
                            <h3 className="text-white px-3">We are the best full-service firm  <br />  based in New York</h3>
                        </div>
                        <div className="col-12 text-center py-3">
                            <p className='picon text-white'>Lawyer base has more than 20 years of experiences in this field and we have solved more than 2000 cases. Every case is very important to us and we always take care of them seriously. We have 98% of happy clients.</p>
                        </div>
                    </div>
                </div>
                <div className="bookinfo-right-side py-5 col-12 col-md-6 py-3" data-aos="fade-left">
                    <div className="text-center">
                        <h3 className='text-dark'>Something About Us</h3>
                        <p className='text-dark'>Pellentesque Adipiscing Purus</p>
                    </div>
                </div>
            </div>
            </div>
        
    );
}

export default Bookinfo;


