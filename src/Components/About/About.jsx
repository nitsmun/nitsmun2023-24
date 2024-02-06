import React, { useEffect } from "react";
import styles from "./about.module.scss";
import Faq from "../Pages/Contact/Faq/Faq";
import Banner from "../Archiv/Banner";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Container from './container';

const About = () => {
  useEffect(() => {
    document.title = "About | NITSMUN";
  }, []);
  return (
    <div className={styles.about} id="about">
      <Navbar page="ABOUT" />
      <div className={styles.innerChild}>
        <Banner />
        <div className={styles.container1}>
          <div className={styles.heading}>
            <h1 className={styles.h1}>ABOUT US</h1>
          </div>
          <div className={styles.imgText}>
            <img
              className={styles.img}
              src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703886312/modelUN_1_k1qoka.png"
              alt="img"
            />
            <p className={styles.p}>
              NITSMUN aspires to involve youth in international dialogue, deliberate upon
              the dire issues of the world and shape them into strong individuals
              who&apos;ll become the leaders of tomorrow.International Model United
              Nations (IMUN) brings youth together from around the world to learn and
              share ideas from a diverse set of experiences and backgrounds where the
              Executive board, International Press and International Delegates consolidate
              to learn about diplomacy, international relations, and the United Nations
              International Model United Nations (IMUN) brings youth together from around
              the world to learn and share ideas from a diverse set of experiences and
              backgrounds where the Executive board, International Press and International
              Delegates consolidate to learn about diplomacy, international relations, and
              the United Nations
            </p>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.heading}>
            <h1 className={styles.h1}>OUR VISION</h1>
          </div>
          <div className={styles.imgText}>
            <img
              className={styles.img}
              src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703886312/modelUN_1_k1qoka.png"
              alt="img"
            />
            <p className={styles.p}>
              The National Institute of Technology Model United Nations Club aims to
              empower students by providing a platform to enhance their understanding of
              global affairs, diplomacy, and leadership. Through engaging conferences and
              activities, we foster critical thinking, public speaking, and teamwork,
              preparing members for active participation in international discourse and
              promoting a sense of global citizenship.
            </p>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.heading}>
            <h1 className={styles.h1}>WHAT IS NITSMUN</h1>
          </div>
          <div className={styles.imgText}>
            <img
              className={styles.img}
              src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703886312/modelUN_1_k1qoka.png"
              alt="img"
            />
            <p className={styles.p}>
              NITSMUN, the National Institute of Technology Model United Nations Club, is
              a dynamic platform cultivating future leaders. Committed to fostering
              diplomacy, critical thinking, and public speaking, NITSMUN provides students
              with opportunities to engage in enriching discussions, simulations, and
              conferences, shaping informed and empowered individuals for active
              participation in international affairs.
            </p>
          </div>
        </div>
        <div className={styles.objective}>
          <h1 className={styles.h1}>OUR OBJECTIVE</h1>
          <Faq color="#1d1c41" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
