import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactemail: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    const myForm = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (myForm.current) {
            emailjs.sendForm('service_dy6agc7', 'template_l8cohvl', myForm.current, '3qGfRZ6FocuspBObD')

                .then(
                    () => {
                        toast.success("Mesaj Ugurla Gonderildi")

                    },
                    () => {
                        toast.error("Mesaj gonderilmedi")
                    },
                );

            myForm.current.reset()
        }
    };
    return (
        <div className='Contact-email-section py-4'>
            <div className="container">
                <div className="row">
                    <div className="email-left-side col-12 col-md-6" data-aos="fade-right">
                        <h1 className='text-white text-center'>Don't hesitate to ask</h1>
                        <p className='text-white text-center'>Law is a complicated matter. It can cause you big problems if you ignore it. Let us help you!</p>
                        <div className="contact-form py-3">
                            <form onSubmit={sendEmail} ref={myForm} className="d-flex flex-column">
                                <input type="text" className="form-control mb-3" placeholder="Name" name='Name' />
                                <input type="text" className="form-control mb-3" placeholder="City" name='City' />
                                <input type="email" className="form-control mb-3" placeholder="Email " name='Email' />
                                <textarea className="form-control mb-3" rows={5} placeholder="Message" name='Message'></textarea>
                                <div className="d-flex justify-content-center">
                                    <Button inTextBtn="SUBMIT" shekil="" klassadi="submit-button my-5" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="email-right-side col-12 col-md-6" data-aos="fade-left">
                        <img src="/assets/images/contactemail/email1.webp" alt="Contact Us" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactemail;