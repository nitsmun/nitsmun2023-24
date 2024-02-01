/* eslint-disable no-console */
import { useState, useMemo } from "react";
import axios from "axios";
import { toast } from "sonner";
import styles from "./ForgotPassword.module.scss";
import Navbar from "../../../Components/Navbar/Navbar";
const FormCard = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const isButtonEnabled = useMemo(() => {
    return Boolean(email);
  }, [email]);

  const isValidEmail = useMemo(() => {
    return Boolean(email.includes("@") && email.includes("."));
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_API}/sendresetpwdlink`, { email })
        .then((res) => {
          if (res.data.message === "Reset password link sent successfully") {
            setEmail("");
            toast.success("Reset password link sent successfully", {
              duration: 10000,
            });
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "email is missing":
            toast.error("email is missing");
            break;
          case "no user found":
            toast.error("no user found");
            break;
          case "Please verify your email first":
            toast.error("Please verify your email first");
            break;
          case "Server Error":
            toast.error("Server Error");
            break;
          case "Email is required":
            toast.error("Email is required");
            break;
          case "Invalid email":
            toast.error("Invalid email");
            break;
          case "Either token or tokenExpiresAt is missing":
            toast.error("Either token or tokenExpiresAt is missing");
            break;
          default:
            toast.error("Something went wrong");
            console.error(err);
            break;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Forgot Password?</h1>
        <p className={styles.p}>
          Enter the personal email address you used when you joined and we will send you
          instructions to rest your password
        </p>
      </div>
      <form className={styles.form}>
        <h1 className={styles.title}>Enter Email</h1>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.textBox}
        />
        <div className={styles.subCont}>
          <input
            type="submit"
            value={submitting ? "Submitting..." : "Submit"}
            style={{
              cursor:
                submitting || !isButtonEnabled || !isValidEmail
                  ? "not-allowed"
                  : "pointer",
              opacity: submitting || !isButtonEnabled || !isValidEmail ? "0.5" : "1",
            }}
            disabled={!isButtonEnabled || submitting || !isValidEmail}
            onClick={handleSubmit}
            className={styles.subBtn}
          />
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
                // className={styles.img}
              />
            </div>
            {/* <h1 className={styles.h1}>
              Join us in shaping a better world through NITS MUN!
            </h1> */}
          </div>
          <FormCard />
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
