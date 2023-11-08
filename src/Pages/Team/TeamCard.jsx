import { useState } from "react";
import styles from "./TeamCard.module.scss";

const TeamCard = (props) => {
  const [details, setDetails] = useState(0);
  return (
    <div>
      <div
        className={styles.TeamCard}
        role="button"
        style={{
          boxShadow: "0 0 2rem #998899aa",
          color: "#ffffff",
          backgroundColor: "#1D1C41",
        }}
      >
        <img
          alt="Loading team card..."
          src={props.img}
          style={{
            textAlign: "center",
            width: "100%",
            backgroundColor: "#000000",
          }}
          className={styles.photo}
        />
        <div className={styles.lustre}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className={styles.overview}>
            <h1 style={{ fontSize: "1rem" }}>{props.name}</h1>
            <h4 style={{ fontSize: "0.8rem" }}>{props.designation}</h4>
          </div>
          <div
            className={styles.details}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: `${details}`,
            }}
          >
            <div style={{ margin: "0 auto" }}>
              <h1 style={{ fontSize: "1rem" }}>{props.name}</h1>
              <h4 style={{ fontSize: "0.8rem" }}>{props.designation}</h4>
              <div
                className={styles.socialCont}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-around",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <img
                  alt="Facebook icon Loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699125289/fb_icon_325x325_oaepmd.png"
                  style={{ height: "2rem", width: "2rem" }}
                />
                <img
                  alt="Instagram icon Loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699125213/nitsmun/768px-Instagram-Icon_v4llqe.png"
                  style={{ height: "2rem", width: "2rem" }}
                />
                <img
                  alt="Linkedin icon Loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699125365/nitsmun/6WtDIesg_400x400_rnallb.png"
                  style={{ height: "2rem", width: "2rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.bottomCircle}
        style={{
          position: "relative",
          left: "60%",
          height: "3rem",
          width: "3rem",
          border: "0 solid transparent",
          borderRadius: "5rem",
          backgroundColor: "#C9984E",
          scale: `${details === 0 ? 1 : 1.05}`,
          transition: "ease 500ms",
          padding: "0.1rem",
          cursor: "pointer",
        }}
        onClick={() => setDetails(details === 0 ? 1 : 0)}
        role="button"
      >
        <img
          className={styles.arrow}
          style={{ scale: "0.5", filter: "invert(100%)" }}
          src={
            details === 0
              ? "https://res.cloudinary.com/dhry5xscm/image/upload/v1699124213/nitsmun/arrow-right-solid_qv7lfi.svg"
              : "https://res.cloudinary.com/dhry5xscm/image/upload/v1699124213/nitsmun/arrow-left-solid_y8rtjn.svg"
          }
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default TeamCard;
