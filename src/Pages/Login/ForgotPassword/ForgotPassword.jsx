import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./ForgotPassword.module.scss";
const FormCard = () => {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Forgot Password?</h1>
        <p className={styles.p}>
          Enter the email address you used when you joined and we will send you
          instructions to rest your password
        </p>
      </div>
      <form className={styles.form}>
        <h1 className={styles.title}>Enter Email</h1>
        <input type="text" placeholder="Enter Email" className={styles.textBox} />
        <div className={styles.subCont}>
          <input type="submit" value="Confirm" className={styles.subBtn} />
        </div>
      </form>
    </div>
  );
};
const ForgotPassword = () => {
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
export default ForgotPassword;
