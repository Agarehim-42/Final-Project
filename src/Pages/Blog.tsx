import React from 'react'
import { CiClock1 } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { GoFileDirectoryFill } from "react-icons/go";





interface blogProps {

  blogImage: string;
  blogBody: string;
  blogHead: string;
  blogTime: string;
  blogMessage:number;
  blogContact:string;
  blogFile:string;
  blogRead:string;
  
}

const Blog: React.FC<blogProps> = ({  blogImage, blogBody, blogHead , blogTime , blogMessage , blogContact , blogFile , blogRead }) => {
  return (
    <div className='blog-card py-5'>
            <div className="container">
                <img src={blogImage} className=" blogimg w-100 d-flex justify-content-center flex-column" alt="..." />
                <div className="card-body" >
                    <h2 className='py-2'><b>{blogHead}</b></h2>
                    <div className="d-flex align-items-center row">
                      <div className="col-12 col-lg-3 col-md-6"> <p className=''><CiClock1/> {blogTime}</p></div>
                      <div className="col-12 col-lg-3 col-md-6">  <p className='px-'><IoMdContact/> {blogContact}</p></div>
                      <div className="col-12 col-lg-3 col-md-6"><p className=''><MdOutlineMessage/> {blogMessage}</p></div>
                      <div className="col-12 col-lg-3 col-md-6"> <p className='px-'><GoFileDirectoryFill/> {blogFile }</p></div>
                   
                    </div>
                  
                    <p className="card-text py-3">{blogBody}</p>
                    <h6 className='h6-read-blog'>{blogRead}</h6>

                </div>
            </div>

        </div>
        
        
  )
}

export default Blog