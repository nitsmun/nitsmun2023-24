import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Pages/Home/Hero/Hero";
import Reviews from "../../Components/Pages/Home/Reviews/Reviews";
import Letter from "../../Components/Letters/letters";
import Nitsmun from "../../Components/WhatIsMUN/nitsMun";
import Footer from "../../Components/Footer/Footer";
import Collaboration from "../../Components/Collaboration/Collaboration";
import Achievements from "../../Components/Achievements/Achievements";
import Blogs from "../../Components/Blogs/Blogs";

// import About from "../../Components/About/About";
// import Archive from "../../Components/Archiv/Archive";
// import Apply from "../../Components/ApplyNow/apply";
const Home = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    document.getElementById("letter").scrollIntoView(); // add id of below section
  };
  useEffect(() => {
    document.title = "NITSMUN";
  }, []);
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
      <div className={styles.innerCont}>
        <div className="letter-container" id="letter">
          <Letter
            title="Faculty Advisor"
            name="Dr. Debjit Bhowmik"
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1729409434/nitsmun/debjitbhowmick_jn2bg4.jpg"
          />
          <Letter
            title="Secretary General"
            name="Ronak Jain"
            src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676477071/events/nitsmun/team/Ronak_Jain_etgqal.jpg"
          />
        </div>
        <Nitsmun />
        <Blogs />
        <Collaboration />
        <Achievements />
        <Reviews />
        {/* <About/>
      <Archive />
      <Apply /> */}
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
