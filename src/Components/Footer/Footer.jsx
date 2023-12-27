import React from 'react';
import "./Footer.css";
const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="image-container">
               <div className="image">
                <div className="icon">
                <a href='#'><img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703518443/Daco_492_1_nplo7p.png" alt="YouTube" className='icon'/></a>
                </div>
                <div className="icon"> 
                <a href='#'><img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703518618/instagram_1_idql8a.png" alt="Instagram" /></a>
                </div>
                <div className="icon"> 
                <a href='#'><img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703518880/facebook_1_rlafaw.png" alt="facebook" /></a> 
                </div> 
                <div className="icon"> 
                <a href='#'><img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703518975/Vector_nmscna.png" alt="linkdin" /></a>
                </div> 
                <div className="icon"> 
                <a href='#'><img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703527371/Group_xm8fdd.png" alt="message" /></a>
                </div> 
               </div>
            </div>
            <div className="nitsmun">
                <div className="contact">
                    <div className="option">
                        <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703528353/Vector_3_n1ot1x.png" alt="phone" />
                        <p>12345-12345</p>
                    </div>
                    <div className="option">
                        <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703528533/Vector_4_dwzcjj.png" alt="location" />
                        <p>xdhgfgshfiuhhwh.com</p>
                    </div>
                    <div className="option">
                        <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703527371/Group_xm8fdd.png" alt="email" />
                        <p>dhagdajkhdjkhgemail.com</p>
                    </div>
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
                <div className="copyright-sec">
                    <p>Copyright © 2023 All Rights Reserved by NITSMUN</p>
                </div>
        </div>
    );
};

export default Footer;