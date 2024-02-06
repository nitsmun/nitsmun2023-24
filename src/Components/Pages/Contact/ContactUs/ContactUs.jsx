import { useState, useMemo } from "react";
import axios from "axios";
import { toast } from "sonner";
import styles from "./ContactUs.module.scss";
const Info = (props) => {
  const icons = {
    "NIT Silchar, Silchar, Assam, India":
      "https://res.cloudinary.com/dhry5xscm/image/upload/v1702653324/nitsmun/location_szmak5.png",
    "nitsmun@nits.ac.in":
      "https://res.cloudinary.com/dhry5xscm/image/upload/v1702653324/nitsmun/gmail_nmaoso.png",
    "+91 7096597864":
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
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const isSendButtonEnabled = useMemo(() => {
    return Boolean(
      name && email && message && email.includes("@") && email.includes(".")
    );
  }, [email, message, name]);

  const sendMessage = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_API}/contactus`, {
          name,
          email,
          message,
        })
        .then((res) => {
          if (
            res.data.message ===
            "Thank you for contacting us. We will get back to you soon"
          ) {
            setEmail("");
            setName("");
            setMessage("");
            toast.success("Thank you for contacting us. We will get back to you soon", {
              duration: 7500,
            });
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "All fields are required":
            toast.error("All fields are required");
            break;
          case "something went wrong":
            toast.error("something went wrong on the server side");
            break;
          default:
            toast.error("Something went wrong");
        }
      }
    } finally {
      setSending(false);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>CONTACT US</h1>
      <form method="POST" className={styles.form}>
        <div className={styles.field}>
          <h1 className={styles.fieldHeading}>Name</h1>
          <input
            className={styles.textBox}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <h1 className={styles.fieldHeading}>Email</h1>
          <input
            className={styles.textBox}
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <h1 className={styles.fieldHeading}>Message</h1>
          <textarea
            className={`${styles.textBox} ${styles.textArea}`}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className={styles.subButton}
          disabled={sending || !isSendButtonEnabled}
          style={{
            cursor: sending || !isSendButtonEnabled ? "not-allowed" : "pointer",
            opacity: sending || !isSendButtonEnabled ? "0.5" : "1",
          }}
          value={sending ? "Sending..." : "Send"}
          onClick={sendMessage}
        />
      </form>
      <div className={styles.infoContParent}>
        <h1 className={styles.contactHeading}>CONTACT US</h1>
        <div className={styles.infoCont}>
          <div className={styles.info}>
            <Info detail="NIT Silchar, Silchar, Assam, India" />
            <Info detail="nitsmun@nits.ac.in" />
            <Info detail="+91 7096597864" />
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
