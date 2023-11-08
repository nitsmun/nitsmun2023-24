import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Pages/Home/Hero/Hero";
import Reviews from "../../Components/Pages/Home/Reviews/Reviews";
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wholeContainer}>
        <Navbar active="home" />
        <Hero />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a className={styles.downscrollButton}>
            <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699440208/nitsmun/scrollDownButton_gpwehg.svg" />
          </a>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Home;
