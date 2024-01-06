import { Link } from "react-router-dom";
import { useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Login.module.scss";
const FormCard = () => {
  const [user, setUser] = useState({
    email: "", password: ""
  });
  const [mssg, setMssg] = useState("");
  const handleSub = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch("http://localhost:3880/v1/api/login", {
        method: "POST",
        mode: "cors",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user)
      });
      if (request) {
        console.log(request.status);
        if (request.status === 200) {
          setMssg("Login successfull");
          console.log("Login successfull");
        }
        else if (request.status === 401) {
          setMssg("Email or password incorrect");
          console.log("Email or password incorrect");
        }
        // window.location.href = "/";
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  const { email, password } = user;
  return (
    <div className={styles.loginWrap}>
      {mssg === "" ? null : <div className={styles.messageBox}>{mssg}</div>
      }
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Welcome Back</h1>
        <p className={styles.p}>Log in to access your NITS-MUN account</p>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Enter Email" className={styles.textBox} name="email" value={email} onChange={(e) => setUser({ email: e.target.value, password })} />
        <input type="password" placeholder="Enter password" className={styles.textBox} name="password" onChange={(e) => setUser({ email, password: e.target.value })} />
        <div className={styles.forgotCont}>
          <Link to="/ForgotPassword" className={styles.button}>
            Forgot Password?
          </Link>
        </div>
        <div className={styles.subCont}>
          <input type="submit" value="Log In" className={styles.subBtn} onClick={handleSub} />
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
