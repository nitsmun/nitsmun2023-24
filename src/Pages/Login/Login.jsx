import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Login.module.scss";
const FormCard = () => {
  const [formMode, setformMode] = useState("login");
  if (formMode === "login") {
    return (
      <div className={styles.loginWrap}>
        <div className={styles.headingCont}>
          <h1 className={styles.h1}>Welcome Back</h1>
          <p className={styles.p}>Log in to access your NITS-MUN account</p>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Enter Name" className={styles.textBox} />
          <input type="text" placeholder="Enter Email" className={styles.textBox} />
          <input
            type="password"
            placeholder="Enter password"
            className={styles.textBox}
          />
          <div className={styles.forgotCont}>
            <button
              onClick={() => setformMode(formMode === "login" ? "forgot" : "login")}
              className={styles.button}
            >
              Forgot Password?
            </button>
          </div>
          <div className={styles.subCont}>
            <input type="submit" value="Log In" className={styles.subBtn} />
            <h6 className={styles.signupQuestion}>
              Haven&apos; t signed up?{" "}
              <Link to="/SignUp" className={styles.a}>
                Sign in Here
              </Link>
            </h6>
          </div>
        </form>
      </div>
    );
  }
  if (formMode === "forgot") {
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
          <input type="text" placeholder="Enter Email" className={styles.textBox} />
          <div className={styles.subCont}>
            <input type="submit" value="Confirm" className={styles.subBtn} />
          </div>
        </form>
      </div>
    );
  }

  return 0;
};
const Login = () => {
  return (
    <div>
      <Navbar page="CONTACT" />
      <FormCard />
    </div>
  );
};
export default Login;
