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
      </div>
      <Reviews />
    </div>
  );
};

export default Home;
