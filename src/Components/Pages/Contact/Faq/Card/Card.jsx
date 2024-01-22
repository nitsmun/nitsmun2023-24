import { useState } from "react";
import styles from "./Card.module.scss";
const Card = (props) => {
  const [opened, setOpened] = useState(false);
  const e = document.querySelector(":root");
  const openHeight = window.getComputedStyle(e).getPropertyValue("--opened");
  const closeHeight = window.getComputedStyle(e).getPropertyValue("--closed");
  return (
    <button
      className={styles.card}
      onClick={() => setOpened(opened === false)}
      style={{
        height: `${opened === false ? closeHeight : openHeight}`,
        transition: "ease 500ms",
      }}
    >
      <div className={styles.question}>
        <button className={styles.toggle} onClick={() => setOpened(opened === false)}>
          .
          <img
            alt="toggler loading ...."
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702666679/nitsmun/toggle_s8a7wq.png"
            className={styles.image}
          />
        </button>
        <h1 className={styles.text}>{props.question}</h1>
        <button
          className={styles.desktopDropdown}
          onClick={() => setOpened(`${opened === false}`)}
        >
          .
          <img
            alt="toggler loading ...."
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702408563/ecs-website/dropDownArrow_ndo5ey.svg"
            className={styles.image}
            style={{ transform: `rotate(${opened === true ? '180deg' : '0deg'})`, transition: 'ease 500ms' }}
          />
        </button>
      </div>
      <div
        className={styles.answer}
        style={{
          opacity: `${opened === false ? 0 : 1}`,
          height: `${opened === false ? "0rem" : "auto"}`,
          transition: "ease 500ms",
        }}
      >
        <h1 className={styles.text}>{props.answer}</h1>
      </div>
    </button>
  );
};
export default Card;
