import React from 'react';
import {FaPhoneAlt} from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="image-container1">
               {/* <div className="image"> */}
                <div className="icon">
                <a href='##'><IoLogoYoutube size={15} color='white'/></a>
                </div>
                <div className="icon"> 
                <a href='##'><FaInstagram size={15} color='white'/></a>
                </div>
                <div className="icon"> 
                <a href='##'><FaFacebook size={15} color='white'/></a> 
                </div> 
                <div className="icon">
                 <a href='##'><FaLinkedin size={15} color='white'/></a>
                </div> 
               {/* </div> */}
            </div>
            <div className="header">
                <div className="contact">
                    <h2>Contact us</h2>
                    <div className="option">
                        <IoLocationOutline className='phone'/>
                        <p>xdhgfgshfiuhhwh.com</p>
                    </div>
                    <div className="option">
                    <TfiEmail className='phone'/>
                        <p>dhagdajkhdjkhgemail.com</p>
                    </div>
                    <div className="option">
                        <FaPhoneAlt className='phone'/>
                        <p>12345-12345</p>
                    </div>
                </div>
                <div className="explore">
                    <h2>
                        Explore
                    </h2>
                    <li>Home</li>
                    <li>Events</li>
                    <li>Team</li>
                    <li>About</li>
                    <li>Segments</li>
                </div>
                <div className="logo">
                    <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703528939/nitsmun_fjkrzp_3_hgu7rx.png" alt="logo" className='logo-icon' />
                    <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703529308/Line_2_xjolyp.png" alt="line"  className='line'/>
                    <div className="font-container">
                    <p className='text'>NITS</p>
                    <p className='text'>MUN</p>
                    </div>
                </div>
            </div>
            <hr />
                <div className="copyright-sec">
                    <div className="copyright">
                    <p>Copyright © 2023 All Rights Reserved by NITSMUN</p>
                    </div>
                    <div className="image-container">
            
                     <div className="icon">
                    <a href='##'><h3><IoLogoYoutube size={15} color='white'/> </h3></a>
                    </div>
                    <div className="icon"> 
                    <a href='##'><FaInstagram size={15} color='white'/></a>
                    </div>
                    <div className="icon"> 
                    <a href='##'><FaFacebook size={15} color='white'/></a> 
                    </div> 
                    <div className="icon"> 
                    <a href='##'><FaLinkedin size={15} color='white'/></a>
                    </div> 
                    
            </div>
                </div>
        </div>
    );
};

export default Footer;