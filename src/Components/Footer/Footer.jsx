import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram,FaFacebook,FaPhoneAlt,FaLinkedin } from "react-icons/fa";
import styles from"./Footer.module.scss";
const Footer = () =>{
    return(
        <div className={styles.footerContainer}>
            <div className={styles.imageContainer1}>
               {/* <div className="image"> */}
                <div className={styles.icon}>
                <IoLogoYoutube size={15} color='white'/>
                </div>
                <div className={styles.icon}> 
                <FaInstagram size={15} color='white'/>
                </div>
                <div className={styles.icon}> 
                <FaFacebook size={15} color='white'/>
                </div> 
                <div className={styles.icon}>
                    <FaLinkedin size={15} color='white'/>
                </div> 
               {/* </div> */}
            </div>
            <div className={styles.header}>
                <div className={styles.contact}>
                    <h2 className={styles.h2}>Contact us</h2>
                    <div className={styles.option}>
                        <IoLocationOutline className={styles.phone}/>
                        <p className={styles.optionText}>xdhgfgshfiuhhwh.com</p>
                    </div>
                    <div className={styles.option}>
                    <TfiEmail className={styles.phone}/>
                        <p className={styles.optionText}>dhagdajkhdjkhgemail.com</p>
                    </div>
                    <div className={styles.option}>
                        <FaPhoneAlt className={styles.phone}/>
                        <p className={styles.optionText}>12345-12345</p>
                    </div>
                </div>
                <div className={styles.explore}>
                    <h2 className={styles.h2}>
                        Explore
                    </h2>
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>Events</li>
                    <li className={styles.li}>Team</li>
                    <li className={styles.li}>About</li>
                    <li className={styles.li}>Segments</li>
                </div>
                <div className={styles.logo}>
                    <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703528939/nitsmun_fjkrzp_3_hgu7rx.png" alt="logo" className ={styles.logoIcon} />
                    <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703529308/Line_2_xjolyp.png" alt="line"  className={styles.line}/>
                    <div className="font-container">
                    <p className={styles.text}>NITS</p>
                    <p className={styles.text}>MUN</p>
                    </div>
                </div>
            </div>
            <hr className={styles.hr}/>
                <div className={styles.copyrightSec}>
                    <div className={styles.copyright}>
                    <p className={styles.copyrightText}>Copyright © 2023 All Rights Reserved by NITSMUN</p>
                    </div>
                    <div className={styles.imageContainer}>
            
                     <div className={styles.icon}>
                    <h3><IoLogoYoutube size={15} color='white'/> </h3>
                    </div>
                    <div className={styles.icon}> 
                    <FaInstagram size={15} color='white'/>
                    </div>
                    <div className={styles.icon}> 
                    <FaFacebook size={15} color='white'/>
                    </div> 
                    <div className={styles.icon}> 
                    <FaLinkedin size={15} color='white'/>
                    </div> 
                    
            </div>
                </div>
        </div>
    );
};

export default Footer;