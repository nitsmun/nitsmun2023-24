import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img
        src="https://res.cloudinary.com/dhry5xscm/image/upload/v1708516396/nitsmun/about1_cab48p.jpg"
        alt="banner"
        className={styles.bannerImg}
      />
    </div>
  );
};

export default Banner;
