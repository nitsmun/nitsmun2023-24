/* eslint-disable check-file/filename-naming-convention */
import React, { useContext, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import styles from "./apply.module.scss";
import Faq from "../Pages/Contact/Faq/Faq";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { UserContext } from "../../Context/ContextProv";

const Apply = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
  const handleApply = (e) => {
    e.preventDefault();
    if (isLoggedIn === true) {
      navigate("/registration");
    } else {
      navigate("/signup");
      toast.error("Please login or signup to register for the event", {
        duration: 10000,
      });
    }
  };

  // const handleApplyToExe = (e) => {
  //   e.preventDefault();
  //   window.open("https://forms.gle/2sEyFRTPrXTBSt288", "_blank");
  // };

  useEffect(() => {
    document.title = "Apply | NITSMUN";
  }, []);
  return (
    <div className={styles.parent}>
      <Navbar page="APPLY" />

      <div className={styles.applyContainer}>
        <div className={styles.innerContainerApply}>
          <div className={styles.applyHeader}>
            <div className={styles.applyPera}>
              <p className={styles.p}>
                &quot;Join us in shaping a better world through NITS MUN&quot;
              </p>
            </div>
            <div className={styles.applyImage}>
              <img
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703528939/nitsmun_fjkrzp_3_hgu7rx.png"
                className={styles.img}
                alt="logo"
              />
            </div>
          </div>

          <div id={styles.topexebanner0}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706616784/off_poster_f8mjht.webp"
              alt=""
            />
          </div>

          {/* <div id={styles.topexebanner}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706616455/exe_application_cbufrm.webp"
              alt=""
            />
          </div> */}

          <main id={styles.ulliprocess}>
            <h2>Steps to apply for the Annual Conference 2024 : </h2>
            <ul>
              <li>Create an account on NITSMUN Signup page (/signup)</li>
              <li>
                Login with your Credentials. (You can directly login if you already
                created an account)
              </li>
              <li>
                After successful login you will be redirected to dashboard page, which
                will ask you to Verify your email. Follow the simple listed steps
              </li>
              <li>
                Check your personal Email Inbox and spam folder for the link, click on the
                link to verify your email.
              </li>
              <li>
                After successful verification you will be redirected to Annual Conference
                Registration page
              </li>
              <li>Select Group Registration (recommended) or Individual registration</li>
              <li>
                If you have selected Group Registration, you will be asked to enter the
                group name, send the invite to your group members, after the members have
                registered for the annual conference you can register for the event.
              </li>
              <li>
                After Successful registration of the event, you will get an confirmation
                email on your Personal Email
              </li>
              {/* <li>If you face any sort of issues please contact +918210610167</li> */}
            </ul>
          </main>
          <h2 id={styles.regopen} style={{ color: "red" }}>
            Registration for the Annual Conference 2024 has been closed!
          </h2>

          {/* <h2 id={`${styles.regopen} `} className={styles.moremarginttop}>
            Registration for Executive board is now Open!
          </h2> */}
          <div className={styles.applyBtn}>
            <button className={styles.button} onClick={handleApply}>
              Register now for Annual Conference 2024
            </button>
          </div>

          {/* <div className={styles.applyBtn}>
            <button className={styles.button} onClick={handleApplyToExe}>
              Apply Now for the Executive Board
            </button>
          </div> */}
          <Faq color="#ffffff" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Apply;
