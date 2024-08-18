import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}


interface AccordionItems2 {
    id: number;
    title: string;
    content: string;
}

const Services: React.FC = () => {
  const accordionItems: AccordionItem[] = [
    { id: 1, title: 'Pharetra Porta Quam Egestas', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' },
    { id: 2, title: 'Dolor Bibendum Tortor', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' },
    { id: 3, title: 'Quam Nibh Fermentum Amet Magna', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' },
    
  ] 
  
  const accordionItems2: AccordionItems2[] = [ 
    { id: 1, title: 'Pharetra Porta Quam Egestas', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' },
    { id: 2, title: 'Dolor Bibendum Tortor', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' },
    { id: 3, title: 'Quam Nibh Fermentum Amet Magna', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='py-5'>
      <div className='about-us-picture'>
        <h3 className='text-center About-us-h3 text-white'>Services</h3>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className=''>
            <h4>Accordion</h4>
            {accordionItems.map((item, index) => (
              <div className='py-3' key={item.id}>
               
                <button className="accordion-visible" onClick={() => toggleAccordion(index)}>
                  <span>{item.title}</span>
                  <FaChevronRight className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                </button>
                <div
                  className='accordion-toggle'
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0px', // '200px' dəyəri kontentin hündürlüyünə uyğunlaşdırılmalıdır
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p className="accordion-content">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
            </div>

            <div className='py-5 my-5'>
                <h4>Toggle Box</h4>
            {accordionItems2.map((item, index) => (
              <div className='py-3' key={item.id}>
               
                <button className="accordion-visible" onClick={() => toggleAccordion(index)}>
                  <span>{item.title}</span>
                  <FaChevronRight className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                </button>
                <div
                  className='accordion-toggle'
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0px', 
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p className="accordion-content">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
            </div>
            <div className='py-5 my-5'>
                <h4>Accordion 2nd Style</h4>
            {accordionItems2.map((item, index) => (
              <div className='py-3' key={item.id}>
               
                <button className="accordion-visible" onClick={() => toggleAccordion(index)}>
                  <span>{item.title}</span>
                  <FaChevronRight className={`icon ${activeIndex === index ? 'rotate' : ''}`} />
                </button>
                <div
                  className='accordion-toggle'
                  style={{
                    maxHeight: activeIndex === index ? '200px' : '0px', // '200px' dəyəri kontentin hündürlüyünə uyğunlaşdırılmalıdır
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                  }}
                >
                  <p className="accordion-content">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className='recent-comments-blog py-3 px-5'>
              <h6 className='text-widget-ff py-3'><b>Shortcodes</b></h6>
              <div className='d-flex flex-column'>
                <div className='d-flex card-blog-1 align-items-center py-3 px-2'>
                  <FaChevronRight className='mx-2'/> <h5><span className='span-blog-yazi'>Accordion/Toggle Box</span></h5>
                </div>
                <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Accordion/Toggle Box</span> </h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5>  <span className='span-blog-yazi'>Audio Shortcode</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Button</span>  </h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Modern Design</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Column Shortcode</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Divider</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Gallery Shortcode</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Heading Tag</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>icons & icon boxes</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Lightbox & Frames</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Notification Boxes</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Personnel</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Post Slider</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Price Table</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Process</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Progress Circle</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Skills</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Slider Shortcode</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Space</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Stunning Text</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Styled Box</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Table</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'> Tabs</span></h5>
        </div>
        <div className='d-flex card-blog-1 aligin-items-center py-3 px-2'>
        <FaChevronRight className='mx-2'/> <h5> <span className='span-blog-yazi'>Typography</span></h5>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
