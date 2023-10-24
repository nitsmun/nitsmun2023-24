import styles from "./TeamCard.module.css";
const TeamCard = (props) => {
  return (
    <div>
      <div
        className={styles.TeamCard}
        style={{
          display: "flex",
          boxShadow: "0 0 2rem #998899aa",
          color: "#ffffff",
          backgroundColor: "#1D1C41",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <img
          alt="Loading team card..."
          src={props.img}
          style={{
            textAlign: "center",
            width: "100%",
            height: "80%",
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
          <div className={styles.details}>
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
              }}
            >
              <img
                alt="Facebook icon Loading..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1697786274/nitsmun/800px-Facebook_icon__28black_29.svg_dupbky.png"
                style={{ height: "2rem", width: "2rem" }}
              />
              <img
                alt="Instagram icon Loading..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1697786320/nitsmun/1384031_xjcws7.png"
                style={{ height: "2rem", width: "2rem" }}
              />
              <img
                alt="Linkedin icon Loading..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1697786365/nitsmun/11-linkedin-512_o9ywr7.png"
                style={{ height: "2rem", width: "2rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.bottomCircle}
        style={{
          position: "relative",
          top: "-6.5rem",
          left: "60%",
          height: "5rem",
          width: "5rem",
          border: "0 solid transparent",
          borderRadius: "5rem",
          backgroundColor: "#C9984E",
        }}
      ></div>
    </div>
  );
};

export default TeamCard;
