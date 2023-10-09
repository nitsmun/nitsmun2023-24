import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from '../../Components/Pages/Home/Hero/Hero';
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wholeContainer}>
        <Navbar active='home' />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
