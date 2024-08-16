import React, { useState } from 'react';
import { FaRegEnvelope, FaFacebook, FaLinkedin, FaPinterest, FaTwitterSquare, FaBars, FaSearch } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoLogoFlickr } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled] = useState(false);

    const toggleNavbar = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

  

   
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className={`top-navigation-wrapper ${isScrolled ? 'd-none' : ''}`}>
                <div className="top-navigation container">
                    <div className="top-navigation-right my-4">
                        <div className="top-navigation-right-text d-flex px-3">
                            <div className="email-header">
                                <FaRegEnvelope />
                                <a className='px-2 text-decoration-none text-dark' href="mailto:test@gmail.com">test@gmail.com</a>
                            </div>
                            <div className="phone-header">
                                <MdLocalPhone />
                                <a className='px-2 text-decoration-none text-dark' href="tel:+994558485174">+994-55-848-51-74</a>
                            </div>
                            <div className="sosial-header px-3 d-flex">
                                <FaFacebook className='px-1' />
                                <IoLogoFlickr className='px-1' />
                                <FaLinkedin className='px-1' />
                                <FaPinterest className='px-1' />
                                <FaTwitterSquare className='px-1' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overlay-menu'>
                <nav className={`navbar navbarbasliq navbar-expand-lg my-background ${isScrolled ? 'navbar-scrolled' : ''}`}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/assets/images/header/Logo.webp" alt="Logo" className='logo-header' />
                        </Link>
                        <button
                            onClick={toggleNavbar}
                            className="navbar-toggler navbarButtonu text-white bg-dark"
                            type="button"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <FaBars />
                        </button>
                        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb- mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark px-4 py-2" aria-current="page" to="/" onClick={closeMobileMenu}>HOME</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <span className="nav-link text-dark px-4 py- dropdown-toggle" onClick={toggleDropdown} role="button">
                                        PAGES
                                    </span>
                                    <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                        <li><Link className="dropdown-item" to="/Attorneys" onClick={closeMobileMenu}>Attorneys</Link></li>
                                        <li><Link className="dropdown-item" to="/Services" onClick={closeMobileMenu}>Services</Link></li>
                                        <li><Link className="dropdown-item" to="/Blogs" onClick={closeMobileMenu}>Blog</Link></li>
                                        <li><Link className="dropdown-item" to="/Raum" onClick={closeMobileMenu}>Raum</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark px-4 py-2" to="/PracticeAreas" onClick={closeMobileMenu}>PRACTICE AREAS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark px-4 py-2" to="/AboutUs" onClick={closeMobileMenu}>ABOUT US</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark px-4 py-2" to="/Blogs" onClick={closeMobileMenu}>BLOG</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark px-4 py-2" to="/ShortCodes" onClick={closeMobileMenu}>SHORTCODES</Link>
                                </li>
                                <li className="nav-item">
                                    <a className='lupa nav-link text-dark px-4 py-2' href="#" onClick={closeMobileMenu}>
                                        <FaSearch />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img src="/assets/images/header/Logo.webp" alt="Logo" className='mobile-logo-header' />
                    </Link>
                    <button className="close-mobile-menu" onClick={closeMobileMenu}>
                        <IoIosCloseCircle />
                    </button>
                </div>
                <nav className="mobile-links">
                    <Link to="/" onClick={closeMobileMenu}>Home</Link>
                    <span className="nav-link-pages text-dark px- py-3 dropdown-toggle" onClick={toggleDropdown} role="button">
                        PAGES
                    </span>
                    <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                        <li><Link className="dropdown-item" to="/AboutUs" onClick={closeMobileMenu}>About Us</Link></li>
                        <li><Link className="dropdown-item" to="/Services" onClick={closeMobileMenu}>Service</Link></li>
                        <li><Link className="dropdown-item" to="/Blogs" onClick={closeMobileMenu}>Blog</Link></li>
                        <li><Link className="dropdown-item" to="/Raum" onClick={closeMobileMenu}>Raum</Link></li>
                    </ul>
                    <Link to="/PracticeAreas" onClick={closeMobileMenu}>Practice Areas</Link>
                    <Link to="/Attorneys" onClick={closeMobileMenu}>Attorneys</Link>
                    <Link to="/Blogs" onClick={closeMobileMenu}>Blog</Link>
                    <Link to="/Shortcodes" onClick={closeMobileMenu}>Shortcodes</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
