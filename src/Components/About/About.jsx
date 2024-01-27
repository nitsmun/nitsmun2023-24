import React from "react";
import styles from "./about.module.scss";
import Faq from "../Pages/Contact/Faq/Faq";
import Banner from "../Archiv/Banner";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Footer from "../../Components/Footer/Footer";
// import Container from './container';

const About = () => {
  return (
    <>
      <Navbar page="ABOUT" />
      <div className={styles.about}>
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
              Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos
              ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et
              internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur
              pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum
              deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam
              et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor
              galisum.. Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente os
              praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et
              libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti
              dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et
              explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum
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
              Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos
              ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et
              internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur
              pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum
              deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam
              et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor
              galisum.. Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente os
              praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et
              libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti
              dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et
              explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum
            </p>
          </div>
        </div>
        <div className={styles.objective}>
          <h1 className={styles.h1}>OUR OBJECTIVE</h1>
          <Faq />
          {/* <Footer /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
