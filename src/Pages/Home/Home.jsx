import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Pages/Home/Hero/Hero";
import Reviews from "../../Components/Pages/Home/Reviews/Reviews";
import Letter from '../../Components/Pages/Home/Letters/Letter';
import Nitsmun from "../../Components/Pages/Home/Nitsmun/Nitsmun";
const Home = () => {
  const handleScrollDown = (e) => {
    e.preventDefault();
    document.getElementById("re").scrollIntoView(); // add id of below section
  };
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.wholeContainer}>
        <Navbar active="home" />
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
      <Letter name="Dr. Wasim Arif" alt="Dr. Wasim Arif" src="https://res-console.cloudinary.com/duom8ur6p/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/bml0c211bi9ocHluanhlbGR6OW1vdW13enNtMQ==/template_primary" title="Letter from the Faculty Advisor" Name="Dr. Wasim Arif" letter="faculty advisor" />
      <Letter name="Dr. Wasim Arif" alt="Dr. Wasim Arif" src="https://res-console.cloudinary.com/duom8ur6p/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/bml0c211bi9tZDdmMDVkaTF6eWRqY3Fsa3RhaQ==/template_primary" title="Letter from Secretary General" Name="Maruf Padaya" letter="secretary general" />
      <Nitsmun />
      <Reviews />
    </div>
  );
};

export default Home;
