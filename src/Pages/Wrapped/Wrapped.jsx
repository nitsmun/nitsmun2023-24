import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Wrapped.module.scss";
const Wrapped = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.childContainer}>
        <Navbar page="WRAPPED" />
        <div className={styles.wrappedContainer}>
          <div className={styles.heading}>
            <div className={styles.logoCont}>
              <img
                alt="wrapped logo.."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702674164/nitsmun/wrapped_up_logo_jtom2h.png"
                className={styles.logo}
              />
            </div>
            <h1 className={styles.text}>
              WRAPPED UP <span className={`${styles.year} ${styles.text}`}>2023</span>{" "}
            </h1>
          </div>
          <p className={styles.brief}>
            With that the 2023 season comes to an end. 2023 was an eventful year, having a
            lots of ups and downs. So, let&apos;s end this 2023 season with a quick recap
            of the year. Presenting to you some of the major changes, that took place in
            different nooks and corners of the globe, this year.
          </p>
          <div className={styles.content}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wrapped;
