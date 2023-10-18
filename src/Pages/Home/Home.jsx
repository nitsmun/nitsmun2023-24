import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from '../../Components/Pages/Home/Hero/Hero';
import Facultypage from "../../Components/letters/facutypage";
import Footer from "../../Components/Footer/footer1";
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wholeContainer}>
        <Navbar active='home' />
        <Hero />
        <Facultypage/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;