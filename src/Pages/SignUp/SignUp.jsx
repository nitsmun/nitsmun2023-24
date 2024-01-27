/* eslint-disable no-console */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./SignUp.module.scss";
const FormCard = () => {
  const [user, setUser] = useState({
    // common inputs
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isStudentOfNITS: false,

    // for nits guys and gals
    instituteEmail: "",
    scholarID: "",
    branch: "",
    year: "",
  });

  const {
    name,
    email,
    phone,
    password,
    confirmPassword,
    scholarID,
    branch,
    instituteEmail,
    isStudentOfNITS,
    year,
  } = user;
  const handleSub = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_API}/signup`, {
          name,
          email,
          phone,
          password,
          confirmPassword,
          isStudentOfNITS,
          scholarID,
          branch,
          instituteEmail,
          year,
        })
        .then((res) => {
          if (res.data.message === "User account created successfully") {
            toast("User account created successfully");
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "Email is required":
            toast("Email is required");
            break;
          case "Invalid email":
            toast("Invalid email");
            break;
          case "Please fill all required fields":
            toast("Please fill all required fields");
            break;
          case "Password should not be less than 8 characters":
            toast("Password should not be less than 8 characters");
            break;
          case "Passwords do not match":
            toast("Passwords do not match");
            break;
          case "Please fill all additional NITS related required fields":
            toast("Please fill all additional NITS related required fields");
            break;
          case "Email already exists":
            toast("Email already exists");
            break;
          case "this Institute email already exists":
            toast("this Institute email already exists");
            break;
          case "this Scholar ID already exists":
            toast("this Scholar ID already exists");
            break;
          case "Failed to sign up":
            toast("Failed to sign up");
            break;
          default:
            toast("Something went wrong, please try again");
            console.error(err);
            break;
        }
      }
    }
  };
  useEffect(() => {
    if (isStudentOfNITS === false) {
      document.getElementById("no").checked = true;
    } else {
      document.getElementById("yes").checked = true;
    }
  }, [isStudentOfNITS]);

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
              <input
                type="radio"
                name="isStudent"
                value
                id="yes"
                className={styles.input}
                onClick={() =>
                  setUser({
                    name,
                    email,
                    phone,
                    password,
                    confirmPassword,
                    isStudentOfNITS: true,
                    year,
                  })
                }
              />
              <label className={styles.label} htmlFor="Yes">
                Yes
              </label>
            </div>
            <div className={styles.radioInner}>
              <input
                type="radio"
                name="isStudent"
                value={false}
                id="no"
                className={styles.input}
                onClick={() =>
                  setUser({
                    name,
                    email,
                    phone,
                    password,
                    confirmPassword,
                    isStudentOfNITS: false,
                    year,
                  })
                }
              />
              <label className={styles.label} htmlFor="No">
                No
              </label>
            </div>
          </div>
        </div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email,
              phone,
              password,
              confirmPassword,
              scholarID,
              branch,
              instituteEmail,
              isStudentOfNITS,
              year,
            })
          }
          className={styles.textBox}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) =>
            setUser({
              name,
              email: e.target.value,
              phone,
              password,
              confirmPassword,
              scholarID,
              branch,
              instituteEmail,
              isStudentOfNITS,
              year,
            })
          }
          className={styles.textBox}
          value={email}
          name="email"
        />
        <input
          type="text"
          placeholder="Enter Phone number"
          className={styles.textBox}
          onChange={(e) =>
            setUser({
              name,
              email,
              phone: e.target.value,
              password,
              confirmPassword,
              scholarID,
              branch,
              instituteEmail,
              isStudentOfNITS,
              year,
            })
          }
          value={phone}
          name="phone_number"
        />
        <input
          type="password"
          placeholder="Enter password"
          className={styles.textBox}
          onChange={(e) =>
            setUser({
              name,
              email,
              phone,
              password: e.target.value,
              confirmPassword,
              scholarID,
              branch,
              instituteEmail,
              isStudentOfNITS,
              year,
            })
          }
          value={password}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(e) =>
            setUser({
              name,
              email,
              phone,
              password,
              confirmPassword: e.target.value,
              scholarID,
              branch,
              instituteEmail,
              isStudentOfNITS,
              year,
            })
          }
          className={styles.textBox}
          value={confirmPassword}
          name="confirmPassword"
        />
        {isStudentOfNITS === true ? (
          <>
            <input
              type="text"
              placeholder="Scholar ID"
              onChange={(e) =>
                setUser({
                  name,
                  email,
                  phone,
                  password,
                  confirmPassword,
                  scholarID: e.target.value,
                  branch,
                  instituteEmail,
                  isStudentOfNITS,
                  year,
                })
              }
              value={scholarID}
              className={styles.textBox}
              name="scholarID"
            />
            <input
              type="text"
              placeholder="Enter Branch"
              onChange={(e) =>
                setUser({
                  name,
                  email,
                  phone,
                  password,
                  confirmPassword,
                  scholarID,
                  branch: e.target.value,
                  instituteEmail,
                  isStudentOfNITS,
                  year,
                })
              }
              value={branch}
              className={styles.textBox}
              name="branch"
            />
            <input
              type="text"
              placeholder="Enter Institute Email"
              onChange={(e) =>
                setUser({
                  name,
                  email,
                  phone,
                  password,
                  confirmPassword,
                  scholarID,
                  branch,
                  instituteEmail: e.target.value,
                  isStudentOfNITS,
                  year,
                })
              }
              value={instituteEmail}
              className={styles.textBox}
              name="instEmail"
            />
            <input
              type="text"
              placeholder="Enter Year (eg:1st year, 2nd year and so on)"
              onChange={(e) =>
                setUser({
                  name,
                  email,
                  phone,
                  password,
                  confirmPassword,
                  scholarID,
                  branch,
                  instituteEmail,
                  isStudentOfNITS,
                  year: e.target.value,
                })
              }
              value={year}
              className={styles.textBox}
              name="year"
            />
          </>
        ) : null}
        <div className={styles.subCont}>
          <input
            type="submit"
            value="Sign Up"
            onClick={handleSub}
            className={styles.subBtn}
          />
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
