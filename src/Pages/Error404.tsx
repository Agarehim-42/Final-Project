import React from 'react'
import { FaRegFrown, FaSearch } from "react-icons/fa";




const Error404:React.FC = () => {
  return (
    <div>
           <div className='about-us-picture my-5'>
                <h3 className='text-center About-us-h3 text-white'>404</h3>
                <h4 className='text-center example-h4'>Page not found</h4>
            </div>
            <div className="container">
            <div className='red-error-page'>
                
                <div className='d-flex flex-column justify-content-center align-items-center ' >
                <FaRegFrown className='text-white frown-error py-2' />
                <h1 className='text-white py-2'>Error 404</h1>
                <p className='text-white py-2'>Sorry, we couldn't find the page you're looking for.</p>
                <div className="search-blog py-2">
        <form className="comment-form">
          <div className="form-group search-input-container-error">
            <input  
              type="text"
              id="name"
              name="name"
              placeholder="Type Keywords... "
              className="search-input-error"
            />
            <FaSearch className="search-icon" />
          </div>
        </form>
      </div>

                </div>
                </div>
                
            </div>
    </div>
  )
}

export default Error404