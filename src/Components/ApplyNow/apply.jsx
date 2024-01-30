/* eslint-disable check-file/filename-naming-convention */
import React, { useContext } from "react";
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
      toast.error("Please login or signup to register for the event");
    }
  };

  const handleApplyToExe = (e) => {
    e.preventDefault();
    window.open("https://forms.gle/2sEyFRTPrXTBSt288", "_blank");
  };

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

          <div id={styles.topexebanner}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706616455/exe_application_cbufrm.webp"
              alt=""
            />
          </div>
          <h2 id={styles.regopen}>
            Registration for Annual Conference 2024 is now Open!
          </h2>

          <h2 id={`${styles.regopen} `} className={styles.moremarginttop}>
            Registration for Executive board is now Open!
          </h2>
          <div className={styles.applyBtn}>
            <button className={styles.button} onClick={handleApply}>
              Register now for Annual Conference 2024
            </button>
          </div>

          <div className={styles.applyBtn}>
            <button className={styles.button} onClick={handleApplyToExe}>
              Apply Now for the Executive Board
            </button>
          </div>
          <Faq color="#ffffff" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Apply;
