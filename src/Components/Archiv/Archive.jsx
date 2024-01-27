import React from "react";
import Faq from "../Pages/Contact/Faq/Faq";
import styles from "./Archive.module.scss";
import Banner from "./Banner";

const Archive = () => {
  return (
    <div className={styles.archiveContainer}>
      <Banner />
      <div className={styles.Header}>
        <p className={styles.p}>Archive</p>
      </div>
      <div className={styles.conatainer}>
        <div className={styles.container1}>
          <div className={styles.munContainer}>
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2022</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.munContainer2}>
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2022</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.munContainer}>
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2022</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.munContainer2}>
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2022</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.munContainer}>
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2022</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
};
export default Archive;
