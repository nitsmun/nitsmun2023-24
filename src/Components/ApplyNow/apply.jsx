import React from "react";
import { toast } from "sonner"
import styles from "./apply.module.scss";
import Faq from "../Pages/Contact/Faq/Faq";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const apply = () => {
  return (
    <div className={styles.parent}>
      <Navbar page="APPLY" />
      <div className={styles.applyContainer}>
        <div className={styles.innerContainerApply}>
          <div className={styles.applyHeader}>
            <div className={styles.applyPera}>
              <p className={styles.p}>&quot;Join us in shaping a better world through NITS MUN&quot;</p>
            </div>
            <div className={styles.applyImage}>
              <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703528939/nitsmun_fjkrzp_3_hgu7rx.png" className={styles.img} alt="logo" />
            </div>
          </div>
          <div className={styles.applyBtn}>
            <button className={styles.button} onClick={() => toast("Application not started yet")}>Apply Now</button>
          </div>
          <Faq />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default apply;