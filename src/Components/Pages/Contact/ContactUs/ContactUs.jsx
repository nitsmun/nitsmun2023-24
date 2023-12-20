import styles from "./ContactUs.module.scss";

const Info = (props) => {
  const icons = {
    "NIT Silchar, Silchar, Assam, India":
      "https://res.cloudinary.com/dhry5xscm/image/upload/v1702653324/nitsmun/location_szmak5.png",
    "nits_mun.gmail.com":
      "https://res.cloudinary.com/dhry5xscm/image/upload/v1702653324/nitsmun/gmail_nmaoso.png",
    "12345-12345":
      "https://res.cloudinary.com/dhry5xscm/image/upload/v1702653324/nitsmun/phone_xeikw0.png",
  };
  return (
    <div className={styles.detail}>
      <div className={styles.iconCont}>
        <img src={icons[`${props.detail}`]} alt="loading icon..." />
      </div>
      <h1 className={styles.infoHeading}>{props.detail}</h1>
    </div>
  );
};

const Field = (props) => {
  return (
    <div className={styles.field}>
      <h1 className={styles.fieldHeading}>{props.heading}</h1>
      {props.type === "textarea" ? (
        <textarea
          className={`${styles.textBox} ${styles.textArea}`}
          placeholder={props.placeholder}
        ></textarea>
      ) : (
        <input
          className={styles.textBox}
          type={props.type}
          placeholder={props.placeholder}
        />
      )}
    </div>
  );
};
const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>CONTACT US</h1>
      <form className={styles.form}>
        <Field heading="Name" type="text" placeholder="eg. xyzabc abcxyz" />
        <Field heading="Email" type="email" placeholder="eg. xyz@gmail.com" />
        <Field heading="Message" type="textarea" placeholder="eg. xyz@gmail.com" />
        <input type="submit" className={styles.subButton} value="Send" />
      </form>
      <div className={styles.infoContParent}>
        <h1 className={styles.contactHeading}>CONTACT US</h1>
        <div className={styles.infoCont}>
          <div className={styles.info}>
            <Info detail="NIT Silchar, Silchar, Assam, India" />
            <Info detail="nits_mun.gmail.com" />
            <Info detail="12345-12345" />
          </div>
          <div className={styles.logoCont}>
            <img
              alt="logo loading..."
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702639587/nitsmun/nitsmun_logo_2_np5mtk.png"
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
