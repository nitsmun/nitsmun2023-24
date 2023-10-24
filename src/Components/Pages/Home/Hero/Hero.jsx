import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";
const TimeLine = () => {
  return (
    <div className={styles.Herotimeline}>
      <h3>Starts in:</h3>
      <div className={styles.container}>
        <div
          className={styles.timeStamp}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            columnGap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <h6>Days</h6>
            <h2
              className={styles.timeBox}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "0.1rem solid var(--NITSMUN-navbar-golden)",
                borderRadius: "1.5rem",
              }}
            ></h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <h6>Hours</h6>
            <h2
              className={styles.timeBox}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "0.1rem solid var(--NITSMUN-navbar-golden)",
                borderRadius: "1.5rem",
              }}
            ></h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <h6>Minutes</h6>
            <h2
              className={styles.timeBox}
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "0.1rem solid var(--NITSMUN-navbar-golden)",
                borderRadius: "1.5rem",
              }}
            ></h2>
          </div>
        </div>
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <div className={styles.Herocard}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        className={styles.Herodetails}
      >
        <img
          src="https://res.cloudinary.com/dhry5xscm/image/upload/v1695657514/nitsmun/MUN_RTU_LOGO_2_ugychb.svg"
          className={styles.Herologo}
          alt="logo"
        />
        <h1
          style={{
            color: "#ffffff",
            borderBottom: "1px solid #ffffff",
            textAlign: "center",
          }}
          className={styles.Heroorg}
        >
          NITSMUN
        </h1>
        <h6 style={{ color: "#ffffff", textAlign: "center" }} className={styles.Herodes}>
          The Delegates Symposium
        </h6>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        className={styles.Herodetails}
      >
        <Link
          style={{
            padding: "1rem",
            border: "0 solid transparent",
            borderRadius: "1rem",
            textDecoration: "none",
          }}
          className={styles.Heroreg}
          to="/"
        >
          REGISTER
        </Link>
        <TimeLine />
      </div>
    </div>
  );
};
export default Hero;
