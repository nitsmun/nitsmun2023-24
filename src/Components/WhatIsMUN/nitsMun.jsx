import React from "react";
import styles from "./NitsMun.module.scss"

const Nitsmun = () => {
  const gotoAbout = () => {
    window.location.href = '/about';
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.img1}>
        <div className={styles.wing}>
          <div className={styles.text}>
            <h1 className={styles.h1}>700+</h1>
            <p className={styles.imgPera}>Delegates hosted till date</p>
          </div>
        </div>
        <div className={styles.wing}>
          <div className={styles.text}>
            <h1 className={styles.h1}>51</h1>
            <p className={styles.imgPera}>Secretariat Members</p>
          </div>
        </div>
      </div>
      <div className={styles.img3}>
        <div className={styles.wing}>
          <div className={styles.text}>
            <h1 className={styles.h1}>50+</h1>
            <p className={styles.imgPera}>Executive Board overall </p>
          </div>
        </div>

      </div>
      <div className={styles.contant}>
        <h1 className={styles.contantH1}>What is NITS MUN?</h1>
        <p className={styles.contantpera}>NITSMUN, the National Institute of Technology Model United Nations Club, is a dynamic platform cultivating global leaders. Committed to fostering diplomacy, critical thinking, and public speaking, NITSMUN provides students with opportunities to engage in enriching discussions, simulations, and conferences, shaping informed and empowered individuals for active participation in international affairs.</p>
      </div>
      <div className={styles.btn}>
        <button className={styles.button} onClick={gotoAbout} >About</button>
      </div>
    </div>
  );
};
export default Nitsmun; 