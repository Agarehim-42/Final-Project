import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";



const Consult:React.FC = () => {
  return (
    <div className='Consult py-3 text-center'>
      <div className="container">
      <h1>Are you having any problems but can’t consult to anyone?</h1>
        <h3 className=' talk-to-us py-3'>Talk to us! We promise we can help you!<b> Call Now! (1)223-3344-334 </b></h3>
        <div className="stunning-item-icon py-5 ">
        <FaPhoneAlt className='phone-consult' />
                                        <div className="stunning-item-icon-divider gdlr-left" ></div>
                                        <div className="stunning-item-icon-divider gdlr-right"></div>
                                    </div>

      </div>

    </div>
    
  )
}

export default Consult