import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TeamCard.module.scss";

const TeamCard = (props) => {
  const [details, setDetails] = useState(0);
  const toggleMenu = () => {
    setDetails(details === 0 ? 1 : 0);
  };
  const handleClick = () => {
    toggleMenu();
  };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      toggleMenu();
    }
  };

  return (
    <div className={styles.cardCont}>
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
            opacity: `${1 - details}`,
            textAlign: "center",
            backgroundColor: "#000000",
            zIndex: `${1 - details}`,
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
            <h1>{props.name}</h1>
            <h4>{props.designation}</h4>
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
            <div style={{ margin: "0 auto" }} className={styles.detailsCont}>
              <h1 className={styles.name}>{props.name}</h1>
              <h4 className={styles.designation}>{props.designation}</h4>
              <div
                className={styles.socialCont}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  cursor: "pointer",
                }}
              >
                {/* Link converted to anchor tag so that we can add functionality to open links in new tab */}
                <a
                  href={props.fb}
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    filter: `invert(${props.web === false ? 0 : 100}%)`,
                  }}
                  alt="Facebook icon Loading..."
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Facebook icon Loading..."
                    src={
                      props.web === false
                        ? "https://res.cloudinary.com/dhry5xscm/image/upload/v1699125289/fb_icon_325x325_oaepmd.png"
                        : "https://res.cloudinary.com/dhry5xscm/image/upload/v1699642357/nitsmun/github_utw5mf.svg"
                    }
                    style={{
                      height: "2.5rem",
                      width: "2.5rem",
                      // filter: `invert(${props.web === false ? 0 : 100}%)`,
                    }}
                  />
                </a>
                <Link to={props.mail}>
                  <img
                    alt="Mail icon Loading..."
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699636486/nitsmun/envelope-regular_sbnoql.svg"
                    style={{ height: "2.5rem", width: "2.5rem", filter: "invert(100%)" }}
                  />
                </Link>

                <a href={props.linkedin} target="_blank" rel="noreferrer">
                  <img
                    alt="Linkedin icon Loading..."
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1699125365/nitsmun/6WtDIesg_400x400_rnallb.png"
                    style={{ height: "2.5rem", width: "2.5rem" }}
                  />
                </a>
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
          border: "0 solid transparent",
          backgroundColor: "#C9984E",
          scale: `${details === 0 ? 1 : 1.05}`,
          transition: "ease 500ms",
          padding: "0.1rem",
          cursor: "pointer",
          zIndex: "2",
        }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
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
