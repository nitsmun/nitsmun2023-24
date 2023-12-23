import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./SignUp.module.scss";
const FormCard = () => {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Join Us Today</h1>
        <p className={styles.p}>Sign up to join the NITS-MUN family</p>
      </div>
      <form className={styles.form}>
        <div className={styles.fromNits}>
          <h1 className={styles.h1}>Are you a student of NIT Silchar?</h1>
          <div className={styles.radioCont}>
            <div className={styles.radioInner}>
              <input type="radio" name="isStudent" value="Yes" className={styles.input} />
              <label className={styles.label} htmlFor="Yes">
                Yes
              </label>
            </div>
            <div className={styles.radioInner}>
              <input type="radio" name="isStudent" value="Yes" className={styles.input} />
              <label className={styles.label} htmlFor="No">
                No
              </label>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Enter Name" className={styles.textBox} />
        <input type="text" placeholder="Scholar ID" className={styles.textBox} />
        <input type="text" placeholder="Enter Branch" className={styles.textBox} />
        <input
          type="text"
          placeholder="Enter Institute Email"
          className={styles.textBox}
        />
        <input type="password" placeholder="Enter password" className={styles.textBox} />
        <div className={styles.subCont}>
          <input type="submit" value="Sign Up" className={styles.subBtn} />
          <h6 className={styles.signupQuestion}>
            Already&apos; t signed up?{" "}
            <Link to="/Login" className={styles.a}>
              Log in Here
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
};
const Login = () => {
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
export default Login;
