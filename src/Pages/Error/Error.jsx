import React from "react";
import styles from "./Error.module.scss";
import Navbar from "../../Components/Navbar/Navbar";

const Error = () => {
  const gotoHome = () => {
    window.location.href = "/";
    return null;
  };
  const gotoContact = () => {
    window.location.href = "/contact";
    return null;
  };
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <p className={styles.number}>404</p>
      </div>
      <hr className={styles.line} />
      <div className={styles.pera}>
        <p className={styles.text}>Oops! Even John Travolta can&apos;t find the </p>
        <p className={styles.text}>page you&apos;re looking for. </p>
      </div>
      <div className={styles.button}>
        <button className={styles.goHome} onClick={gotoHome}>
          Go Home
        </button>
        <button className={styles.goHome} onClick={gotoContact}>
          contact Us
        </button>
      </div>
      <div className={styles.image}>
        <img
          className={styles.img}
          src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706372590/confused-john-travolta_jrl3xe.gif"
          alt="gif"
        />
      </div>
    </div>
  );
};
export default Error;
