/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.imageContainer1}>
        {/* <div className="image"> */}
        <div className={styles.icon}>
          <a href="https://www.youtube.com/@nitsmun384" target="_blank">
            <IoLogoYoutube color="white" />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://www.instagram.com/nitsmun/" target="_blank">
            <FaInstagram color="white" />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://www.facebook.com/NITSMUN" target="_blank">
            <FaFacebook color="white" />
          </a>
        </div>
        <div className={styles.icon}>
          <a
            href="https://www.linkedin.com/company/nit-silchar-model-united-nations/mycompany/"
            target="_blank"
          >
            <FaLinkedin color="white" />
          </a>
        </div>
        {/* </div> */}
      </div>
      <div className={styles.header}>
        <div className={styles.contact}>
          <h2 className={styles.h2}>Contact us</h2>
          <div className={styles.option}>
            <img
              src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706355502/Vector_5_qhs1q3.png"
              alt="logo"
              className={styles.phone}
            />
            <p className={styles.optionText}>
              <a
                href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577192,92.789718,17z/data=!3m1!4b1!4m6!3m5!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929!16zL20vMDhfMWhk?entry=ttu"
                target="_blank"
              >
                NIT SILCHAR, Silchar, Assam, India
              </a>
            </p>
          </div>
          <div className={styles.option}>
            <img
              src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706356743/Group_1_mmmfxq.png"
              alt="logo"
              className={styles.phone}
            />
            <p className={styles.optionText}>
              <a href="mailto:nitsmun@nits.ac.in">nitsmun@nits.ac.in</a>
            </p>
          </div>
          <div className={styles.option}>
            <img
              src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706356577/Vector_6_ele06d.png"
              alt="logo"
              className={styles.phone}
            />
            <p className={styles.optionText}>
              <a href="tel:+91 8402822820">+91 8402822820</a>
            </p>
          </div>
        </div>
        <div className={styles.explore}>
          <h2 className={styles.h2}>Explore</h2>
          <li className={styles.li}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link to="/mockmun24">Mock MUN 2024</Link>
          </li>
          <li className={styles.li}>
            <Link to="/team">Team</Link>
          </li>
          <li className={styles.li}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.li}>
            <Link to="/photo">Photo Gallery</Link>
          </li>
        </div>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699293673/nitsmun/nitsmun_logo_otrutb.png"
              alt="logo"
              className={styles.logoIcon}
            />
          </Link>
          <img
            src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703529308/Line_2_xjolyp.png"
            alt="line"
            className={styles.line}
          />
          <div className={styles.fontContainer}>
            <p className={styles.text}>NITS</p>
            <p className={styles.text}>MUN</p>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.copyrightSec}>
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            Copyright © 2023 All Rights Reserved by NITSMUN
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.icon}>
            <h3>
              <a href="https://www.youtube.com/@nitsmun384" target="_blank">
                {" "}
                <IoLogoYoutube size={15} color="white" />{" "}
              </a>
            </h3>
          </div>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/nitsmun/" target="_blank">
              <FaInstagram size={15} color="white" />
            </a>
          </div>
          <div className={styles.icon}>
            <a href="https://www.facebook.com/NITSMUN" target="_blank">
              {" "}
              <FaFacebook size={15} color="white" />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.linkedin.com/company/nit-silchar-model-united-nations/mycompany/"
              target="_blank"
            >
              <FaLinkedin size={15} color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
