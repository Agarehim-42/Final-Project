import React from 'react'
import { FaCar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { MdSupport } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import { FaHome } from "react-icons/fa";







const Lawmen:React.FC = () => {
  return (
    <div className='lawmen-section text-white py-5'>
        <div className="container">
            <div className="row">
                <div className="Jack-Smith container d-flex py-5 justify-content-center aligin-items-center col-12 col-md-12 col-lg-4">
                    <img className='jacksmit' src="/assets/images/lawmen/jack-smith.webp" alt="" />
                </div>
            <div className="lawmen-left-side py-5 col-12 col-md-12 col-lg-4 d-flex flex-column">
                <div className="lawmen-card d-flex ">
                    <div className="lawyer-logo px-3">
                    <FaCar/>
                    </div>
                    <div className="lawmen-info">
                        <h4>Ultricies Ipsum</h4>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                    </div>
                </div>
                <div className="lawmen-card d-flex ">
                    <div className="lawyer-logo px-3">
                    <FaUsers/>
                    </div>
                    <div className="lawmen-info">
                        <h4>Ultricies Ipsum</h4>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                    </div>
                </div>
                <div className="lawmen-card d-flex ">
                    <div className="lawyer-logo px-3">
                    <BsBank/>
                    </div>
                    <div className="lawmen-info">
                        <h4>Ultricies Ipsum</h4>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                    </div>
                </div>

            </div>
            <div className="lawmen-left-side py-5 col-12 col-md-12 col-lg-4 d-flex flex-column">
                <div className="lawmen-card d-flex ">
                    <div className="lawyer-logo px-3">
                    <MdSupport/>
                    </div>
                    <div className="lawmen-info">
                        <h4>Ultricies Ipsum</h4>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                    </div>
                </div>
                <div className="lawmen-card d-flex ">
                    <div className="lawyer-logo px-3">
                    <FaAmbulance/>
                    </div>
                    <div className="lawmen-info">
                        <h4>Ultricies Ipsum</h4>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                    </div>
                </div>
                <div className="lawmen-card d-flex ">
                    <div className="lawyer-logo px-3">
                    <FaHome/>
                    </div>
                    <div className="lawmen-info">
                        <h4>Ultricies Ipsum</h4>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consec.</p>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Lawmen