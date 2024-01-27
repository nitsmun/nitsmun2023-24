import React from "react";
import Faq from "../Pages/Contact/Faq/Faq";
import styles from "./Archive.module.scss";
import Banner from "./Banner";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Archive = () => {
  return (
    <div className={styles.archiveContainer}>
      <Navbar page="ABOUT" />
      <Banner />
      <div className={styles.Header}>
        <p className={styles.p}>Archive</p>
      </div>
      <div className={styles.conatainer}>
        {/* <div className={styles.container1}>
                <div className={styles.munContainer}>
                    <div className={styles.text}>
                    <p className={styles.conatainerPera}>NITS MUN 2022</p>
                    </div>
                    <div className={styles.image}>
                    <img className={styles.conatainerImg} src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png" alt="logo" />
                    </div>
                </div>
            </div> */}
        {/* <div className={styles.container1}>
                <div className={styles.munContainer2}>
                    <div className={styles.text}>
                    <p className={styles.conatainerPera}>NITS MUN 2022</p>
                    </div>
                    <div className={styles.image}>
                    <img className={styles.conatainerImg} src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png" alt="logo" />
                    </div>
                </div>
            </div> */}
        <a href="https://nitsmun2021-22.onrender.com/" className={styles.container1}>
          <div className={styles.munContainer}>
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2021</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </div>
        </a>
        <a
          href="https://adityakotari.github.io/Model-United-Nations/"
          className={styles.container1}
        >
          <div className={styles.munContainer2}>
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2020</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </div>
        </a>
        <div className={styles.container1}>
          <a
            href="https://yashbajoria.github.io/nitsmun2019/"
            className={styles.munContainer}
          >
            <div className={styles.text}>
              <p className={styles.conatainerPera}>NITS MUN 2019</p>
            </div>
            <div className={styles.image}>
              <img
                className={styles.conatainerImg}
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703972106/pngwing_7_i79zdw.png"
                alt="logo"
              />
            </div>
          </a>
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Archive;
