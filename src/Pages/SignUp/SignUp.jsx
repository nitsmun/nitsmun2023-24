import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./SignUp.module.scss";
const FormCard = () => {
  const [mssg, setMssg] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    isStudentOfNITS: false,
    password: "",
    confirmPassword: "",
    scholarID: "",
    branch: "",
    instituteEmail: "",
    year: ""
  });
  const { name, email, phone, password, confirmPassword, scholarID, branch, instituteEmail, isStudentOfNITS, year } = user;
  const handleSub = async (e) => {
    e.preventDefault();

    const request = await fetch("http://localhost:3880/v1/api/signup",
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user)
      }
    )
    if (request) {
      if (request.status === 200) {
        setMssg("You have successfully signed up!");
      }
      else {
        setMssg("Oops! There was some problem signing up. Please try again later.");
      }
    }

  }
  useEffect(() => {
    if (isStudentOfNITS === false) {
      document.getElementById("no").checked = true;
    }
    else {
      document.getElementById("yes").checked = true;
    }
  }, []);
  return (
    <div className={styles.loginWrap}>
      <div className={styles.messageBox}>{mssg}</div>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Join Us Today</h1>
        <p className={styles.p}>Sign up to join the NITS-MUN family</p>
      </div>
      <form className={styles.form}>
        <div className={styles.fromNits}>
          <h1 className={styles.h1}>Are you a student of NIT Silchar?</h1>
          <div className={styles.radioCont}>
            <div className={styles.radioInner}>
              <input type="radio" name="isStudent" value id="yes" className={styles.input} onClick={() => setUser({ name, email, phone, password, confirmPassword, isStudentOfNITS: true, year })} />
              <label className={styles.label} htmlFor="Yes">
                Yes
              </label>
            </div>
            <div className={styles.radioInner}>
              <input type="radio" name="isStudent" value={false} id="no" className={styles.input} onClick={() => setUser({ name, email, phone, password, confirmPassword, isStudentOfNITS: false, year })} />
              <label className={styles.label} htmlFor="No">
                No
              </label>
            </div>
          </div>
        </div>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setUser({ name: e.target.value, email, phone, password, confirmPassword, scholarID, branch, instituteEmail, isStudentOfNITS, year })} className={styles.textBox} name="name" />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setUser({ name, email: e.target.value, phone, password, confirmPassword, scholarID, branch, instituteEmail, isStudentOfNITS, year })}
          className={styles.textBox}
          value={email}
          name="email"
        />
        <input
          type="text"
          placeholder="Enter Phone number"
          className={styles.textBox}
          onChange={(e) => setUser({ name, email, phone: e.target.value, password, confirmPassword, scholarID, branch, instituteEmail, isStudentOfNITS, year })}
          value={phone}
          name="phone_number"
        />
        <input type="password" placeholder="Enter password" className={styles.textBox} onChange={(e) => setUser({ name, email, phone, password: e.target.value, confirmPassword, scholarID, branch, instituteEmail, isStudentOfNITS, year })} value={password} name="password" />
        <input type="password" placeholder="Confirm password" onChange={(e) => setUser({ name, email, phone, password, confirmPassword: e.target.value, scholarID, branch, instituteEmail, isStudentOfNITS, year })} className={styles.textBox} value={confirmPassword} name="confirmPassword" />
        {isStudentOfNITS === true ?
          <>
            <input type="text" placeholder="Scholar ID" onChange={(e) => setUser({ name, email, phone, password, confirmPassword, scholarID: e.target.value, branch, instituteEmail, isStudentOfNITS, year })} value={scholarID} className={styles.textBox} name="scholarID" />
            <input type="text" placeholder="Enter Branch" onChange={(e) => setUser({ name, email, phone, password, confirmPassword, scholarID, branch: e.target.value, instituteEmail, isStudentOfNITS, year })} value={branch} className={styles.textBox} name="branch" />
            <input type="text" placeholder="Enter Institute Email" onChange={(e) => setUser({ name, email, phone, password, confirmPassword, scholarID, branch, instituteEmail: e.target.value, isStudentOfNITS, year })} value={instituteEmail} className={styles.textBox} name="instEmail" />
            <input type="text" placeholder="Enter Year (eg:1st year, 2nd year and so on)" onChange={(e) => setUser({ name, email, phone, password, confirmPassword, scholarID, branch, instituteEmail, isStudentOfNITS, year: e.target.value })} value={year} className={styles.textBox} name="year" />
          </> : null
        }
        <div className={styles.subCont}>
          <input type="submit" value="Sign Up" onClick={handleSub} className={styles.subBtn} />
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
