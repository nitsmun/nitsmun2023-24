import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Login.module.scss";
const FormCard = () => {
  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Welcome Back</h1>
        <p className={styles.p}>Log in to access your NITS-MUN account</p>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Enter Name" className={styles.textBox} />
        <input type="text" placeholder="Enter Email" className={styles.textBox} />
        <input type="password" placeholder="Enter password" className={styles.textBox} />
        <div className={styles.forgotCont}>
          <Link to="/ForgotPassword" className={styles.button}>
            Forgot Password?
          </Link>
        </div>
        <div className={styles.subCont}>
          <input type="submit" value="Log In" className={styles.subBtn} />
          <h6 className={styles.signupQuestion}>
            Haven&apos; t signed up?{" "}
            <Link to="/SignUp" className={styles.a}>
              Sign Up Here
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
