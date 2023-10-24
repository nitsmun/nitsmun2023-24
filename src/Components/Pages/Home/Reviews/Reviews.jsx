import ReviewCard from "./ReviewCard";
const Reviews = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <h1 style={{ color: "#000055", fontWeight: "300", textAlign: "center" }}>
        REVIEWS
      </h1>
      <ReviewCard
        image="https://res.cloudinary.com/dhry5xscm/image/upload/v1697798196/nitsmun/picture-profile-icon-human-people-260nw-1011304363_myafws.jpg"
        review='"Write your Review"'
      />
    </div>
  );
};
export default Reviews;
