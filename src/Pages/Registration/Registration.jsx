import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Registration.module.scss";
const FieldName = (props) => {
  return (
    <div className={styles.fieldName} style={{ width: `${props.width}` }}>
      <h1 className={styles.name}>{props.name}</h1>
      <h1
        className={styles.compulsory}
        style={{ visibility: `${props.compulsory === true ? "visible" : "hidden"}` }}
      >
        *
      </h1>
    </div>
  );
};
const Registration = () => {
  return (
    <div>
      <Navbar page="REGISTRATION" />
      <h1 className={styles.mainHeading}>REGISTER NOW</h1>
      <div className={styles.regCont}>
        <div className={styles.heading}>
          <div className={styles.textCont}>
            <h1 className={styles.title}>Youth Parliament Online Registration Form</h1>
            <h4 className={styles.tagline}>
              Please fill in the form below. We&apos;ll contact you as soon as possible.
            </h4>
          </div>
          <div className={styles.logoCont}>
            <img
              alt="logo loading..."
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702639587/nitsmun/nitsmun_logo_2_np5mtk.png"
              className={styles.logo}
            />
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.partitions}>
            <FieldName compulsory name="Full Name" width="100%" />
            <div className={styles.fullName}>
              <div className={styles.textBox}>
                <input type="text" className={styles.inputBox} />
                <h6 className={styles.label}>First Name</h6>
              </div>
              <div className={styles.textBox}>
                <input type="text" className={styles.inputBox} />
                <h6 className={styles.label}>Last Name</h6>
              </div>
            </div>
          </div>
          <div className={styles.year}>
            <div className={styles.partitions}>
              <FieldName compulsory name="Year" />
              <input type="text" className={styles.inputBox} />
            </div>
            <div className={styles.partitions}>
              <FieldName compulsory name="Scholar ID" />
              <input type="text" className={styles.inputBox} />
            </div>
          </div>
          <div className={`${styles.partitions} ${styles.email}`}>
            <FieldName compulsory name="E-mail" />
            <input type="text" className={styles.inputBox} />
          </div>
          <div className={`${styles.partitions} ${styles.phoneNo}`}>
            <FieldName compulsory name="Phone Number" />
            <input type="text" className={styles.inputBox} />
          </div>
          <div className={`${styles.partitions} ${styles.prevExp}`}>
            <FieldName compulsory name="Previous MUN experiences (if any)" />
            <textarea className={styles.inputBox}></textarea>
          </div>
          <div className={`${styles.partitions} ${styles.committee}`}>
            <FieldName compulsory name="Committee Preferences" />
            <div className={styles.partitionChild}>
              <h6 className={styles.disclaimer}>
                (Due to limited capacity, delegates are informed that the committee
                preference are not always met and are not guaranteed.)
              </h6>
              <ul className={styles.prefTags}>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <div className={styles.inputCont}>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 1: </h2>
                  <input type="text" className={styles.prefBox} />
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 2: </h2>
                  <input type="text" className={styles.prefBox} />
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 3: </h2>
                  <input type="text" className={styles.prefBox} />
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 4: </h2>
                  <input type="text" className={styles.prefBox} />
                </div>
              </div>
              <div className={styles.payment}>
                <FieldName compulsory name="Payment" />
                <div className={styles.payCont}>
                  <p className={styles.p}>
                    To participate in the NITS- MUN Youth Parliament 2023, a registration
                    fee of Rs 499 is needed to be paid by every delegate which will
                    include Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente
                  </p>
                  <div className={styles.payInfoMaster}>
                    <div className={styles.paymentInfoCont}>
                      <div className={styles.paymentInfo}>
                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>
                            UPI No.:
                          </span>
                          12345 12345
                        </h1>
                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>UPI ID:</span>
                          abcde-12345
                        </h1>
                        <span
                          className={`${styles.h1} ${styles.bolded}`}
                          style={{ color: "#000000" }}
                        >
                          Scan QR code to pay :
                        </span>
                      </div>
                      <div className={styles.screenshot}>
                        <div>Insert screenshot of the payment * :</div>
                        <input type="file" placeholder="Add .png/ .jpg/ .jpeg file" />
                      </div>
                    </div>
                    <div>
                      <img
                        alt="logo loading..."
                        src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702679499/Rickrolling_QR_code_1_bic0zd.png"
                      />
                    </div>
                  </div>
                  <div className={styles.subCont}>
                    <input type="submit" value="Submit" className={styles.submitBtn} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactInfoCont}>
            <h2 className={styles.bolded}>For any queries contact:</h2>
            <h2 className={styles.normal}>1. Lorem Ipsum dolor (69420-69420)</h2>
            <h2 className={styles.normal}>2. Lorem Ipsum dolor (42069-420-69)</h2>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
