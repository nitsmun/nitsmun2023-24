import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Pages/Home/Hero/Hero";
import Reviews from "../../Components/Pages/Home/Reviews/Reviews";
import Letter from "../../Components/Letters/letters";
import Nitsmun from "../../Components/WhatIsMUN/nitsMun";
import Footer from "../../Components/Footer/Footer";

// import About from "../../Components/About/About";
// import Archive from "../../Components/Archiv/Archive";
// import Apply from "../../Components/ApplyNow/apply";
const Home = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    document.getElementById("letter").scrollIntoView(); // add id of below section
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerCont}>
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
        <div className="letter-container" id="letter">
          <Letter
            title="Faculty Advisor"
            name="Dr. Wasim Arif"
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1701965729/ecs-website/wasim-img_orgqul.jpg"
          />
          <Letter
            title="Secratory General"
            name="Maruf Padaya"
            src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676476439/events/nitsmun/team/marufPadaya_faj39h.jpg"
          />
        </div>
        <Reviews />
        <Nitsmun />
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
