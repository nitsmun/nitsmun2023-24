import ReviewCard from "./ReviewCard";
import styles from './Reviews.module.scss'
import data from './db.json'
const Reviews = () => {
  return (
    <div style={{ marginTop: "3rem" }} className={styles.reviews}>
      <h1 style={{ color: "#000055", fontWeight: "600" }}>
        REVIEWS
      </h1>
      <div className={styles.reviewContainer}>
        {
          data.map((item) =>
            <ReviewCard image={item.img} review={item.review} index={item.id} />
          )
        }
      </div>
    </div >
  );
};
export default Reviews;
