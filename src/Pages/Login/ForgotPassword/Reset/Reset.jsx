import Navbar from "../../../../Components/Navbar/Navbar";
import styles from "./Reset.module.scss";
const FormCard = () => {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Reset Password</h1>
        <p className={styles.p}>Please enter a new unique password</p>
      </div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <h1 className={styles.title}>Enter New Password</h1>
          <input
            type="text"
            placeholder="Enter New Password"
            className={styles.textBox}
          />
        </div>
        <div className={styles.inputContainer}>
          <h1 className={styles.title}>Confirm Password</h1>
          <input type="text" placeholder="Confirm Password" className={styles.textBox} />
        </div>
        <div className={styles.subCont}>
          <input type="submit" value="Save" className={styles.subBtn} />
        </div>
      </form>
    </div>
  );
};
const Reset = () => {
  return (
    <div className={styles.loginPage}>
      <Navbar page="CONTACT" />
      <div className={styles.pageCont}>
        <div className={styles.innerCont}>
          <div className={styles.logoCont}>
            <div className={styles.parent}>
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703270578/nitsmun/oAuth-logo_z5vdk0.svg"
                alt="logo loading..."
                className={styles.img}
              />
            </div>
            <h1 className={styles.h1}>
              Join us in shaping a better world through NITS MUN!
            </h1>
          </div>
          <FormCard />
        </div>
      </div>
    </div>
  );
};
export default Reset;
