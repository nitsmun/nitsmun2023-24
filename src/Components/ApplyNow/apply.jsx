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
          <h2 id={styles.regopen}>
            Registration for Annual Conference 2024 is now Open!
          </h2>
          <div className={styles.applyBtn}>
            <button className={styles.button} onClick={handleApply}>
              Apply Now
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
