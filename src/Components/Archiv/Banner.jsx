import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img
        src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703885689/French_Parliament_Passes_Deep_Sleep_Bill_For_End_Of_Life_1_1_ibex0n.png"
        alt="banner"
        className={styles.bannerImg}
      />
    </div>
  );
};

export default Banner;
