/* eslint-disable no-console */
import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import Navbar from "../../../../Components/Navbar/Navbar";
import styles from "./Reset.module.scss";
const FormCard = () => {
  const { token } = useParams();
  const [newPwdDeatils, setNewPwdDetails] = useState({
    newpwd: "",
    cnewpwd: "",
  });
  const [changing, setChanging] = useState(false);
  const navigate = useNavigate();
  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPwdDeatils.newpwd !== newPwdDeatils.cnewpwd) {
      toast.error("Passwords do not match", { duration: 7500 });
      return;
    }
    if (newPwdDeatils.newpwd.length < 8) {
      toast.error("New password should be atleast 8 characters long", { duration: 7500 });
      return;
    }

    setChanging(true);
    try {
      await axios
        .put(`${import.meta.env.VITE_REACT_APP_API}/resetpassword`, {
          token,
          cnewpwd: newPwdDeatils.cnewpwd,
          newpwd: newPwdDeatils.newpwd,
        })
        .then((res) => {
          if (res.data.message === "Password reset successfully") {
            toast.success("Password reset successfully", {
              duration: 10000,
            });
            setTimeout(() => {
              navigate("/login");
            }, 5000);
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "payload is missing":
            toast.error("payload is missing");
            break;
          case "no user found":
            toast.error("no user found");
            break;
          case "token expired. please try again later":
            toast.error("token expired. please try again later");
            break;
          case "passwords do not match":
            toast.error("passwords do not match");
            break;
          case "New password should be atleast 8 characters long":
            toast.error("New password should be atleast 8 characters long");
            break;
          case "Server Error":
            toast.error("Server Error");
            break;
          default:
            toast.error("Something went wrong");
            break;
        }
      }
    } finally {
      setChanging(false);
    }
  };

  const isButtonEnabled = useMemo(() => {
    return Boolean(newPwdDeatils.newpwd && newPwdDeatils.cnewpwd);
  }, [newPwdDeatils.newpwd, newPwdDeatils.cnewpwd]);

  return (
    <div className={styles.loginWrap}>
      <div className={styles.headingCont}>
        <h1 className={styles.h1}>Reset Password</h1>
        <p className={styles.p}>
          Please enter a new unique, minimum 8 characters long password
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <h1 className={styles.title}>Enter New Password</h1>
          <input
            type="password"
            placeholder="Enter New Password"
            className={styles.textBox}
            value={newPwdDeatils.newpwd}
            onChange={(e) => {
              setNewPwdDetails({ ...newPwdDeatils, newpwd: e.target.value });
            }}
          />
        </div>
        <div className={styles.inputContainer}>
          <h1 className={styles.title}>Confirm New Password</h1>
          <input
            type="password"
            placeholder="Confirm New Password"
            value={newPwdDeatils.cnewpwd}
            onChange={(e) =>
              setNewPwdDetails({ ...newPwdDeatils, cnewpwd: e.target.value })
            }
            className={styles.textBox}
          />
        </div>

        <div className={styles.subCont}>
          <input
            type="submit"
            style={{
              cursor: changing || !isButtonEnabled ? "not-allowed" : "pointer",
              opacity: changing || !isButtonEnabled ? "0.5" : "1",
            }}
            value={changing ? "Submitting..." : "Submit"}
            className={styles.subBtn}
            onClick={handleChangePassword}
            disabled={changing || !isButtonEnabled}
          />
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
                alt=""
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
export default Reset;
