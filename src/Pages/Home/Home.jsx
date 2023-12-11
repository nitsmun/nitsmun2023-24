import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Pages/Home/Hero/Hero";
import Reviews from "../../Components/Pages/Home/Reviews/Reviews";
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
      <Reviews />
    </div>
  );
};

export default Home;
