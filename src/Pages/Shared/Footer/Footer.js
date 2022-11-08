import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaGoogle, FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <h1 className="footer-title"><FaRegCopyright /><span className='name'>Sourav Saha</span></h1>
                <div className="footer-link">
                    <Link className='footer-icon-link' to="#">Contact Me</Link>
                    <Link className='footer-icon-link' to="#">Terms of Service</Link>
                    <Link className='footer-icon-link' to="#">Privacy Policy</Link>
                    <Link className='footer-icon-link' to="#">Privacy Settings</Link>
                </div>
                <div className='footer-link'>
                    <Link className='footer-icon-link'><FaFacebook /></Link>
                    <Link className='footer-icon-link'><FaGithub /></Link>
                    <Link className='footer-icon-link'><FaGoogle /></Link>
                    <Link className='footer-icon-link'><FaInstagram /></Link>
                    <Link className='footer-icon-link'><FaLinkedinIn /></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;