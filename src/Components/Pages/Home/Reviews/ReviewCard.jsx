import styles from "./ReviewCard.module.scss";
const ReviewCard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "3rem",
      }}
      className={styles.card}
    >
      <img
        alt="loading review card..."
        src={props.image}
        style={{
          objectFit: "contain",
          boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.25)",
          transform: "translateY(2.5rem)",
          height: "10rem",
          width: "10rem",
          border: "0 solid transparent",
          borderRadius: "13rem",
        }}
      />
      <div
        className={styles.review}
        style={{
          padding: "3rem",
          border: "0 solid transparent",
          borderRadius: "1.5rem",
        }}
      >
        <h1>{props.name}</h1>
        <p>
          <img
            alt="opening quote"
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1700678291/nitsmun/opening-quote_qbvlkg.svg"
            className={styles.quote}
            style={{ marginRight: "1rem", marginBottom: "1rem" }}
          />
          {props.review}
          <img
            alt="closing quote"
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1700678291/nitsmun/closing-quote_x20keo.svg"
            className={styles.quote}
            style={{ marginLeft: "1rem" }}
          />
        </p>
      </div>
    </div>
  );
};
export default ReviewCard;
