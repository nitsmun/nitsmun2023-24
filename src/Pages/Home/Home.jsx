import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Pages/Home/Hero/Hero";
import Reviews from "../../Components/Pages/Home/Reviews/Reviews";
import Letter from "../../Components/Letters/letters";
import Nitsmun from "../../Components/WhatIsMUN/nitsMun";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    document.getElementById("re").scrollIntoView(); // add id of below section
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wholeContainer}>
        <Navbar page="HOME" />
        <Hero />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button onClick={handleScrollDown} className={styles.downscrollButton}>
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699440208/nitsmun/scrollDownButton_gpwehg.svg"
              alt="img"
            />
          </button>
        </div>
      </div>
      <div className="letter-container" >
      <Letter title="Secratory General" name="Maruf Padaya" src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703446281/image_1_3_azcue6.png"/>
      <Letter title="Faculty Advisor" name="Dr. Wasim Arif" src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703446281/image_1_3_azcue6.png"/>
      </div>
      <Reviews />
      <Nitsmun/>
      <Footer />

    </div>
  );
};

export default Home;
