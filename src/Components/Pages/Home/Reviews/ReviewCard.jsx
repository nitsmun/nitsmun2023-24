import styles from "./ReviewCard.module.css"
const ReviewCard = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
            <img alt="Image loading..." src={props.img} style={{ boxShadow: '0 0.5rem 1rem #aaaaaa', transform: 'translateY(2.5rem)', height: '10rem', width: '10rem', border: '0 solid transparent', borderRadius: '10rem' }} />
            <div className={styles.review} style={{ padding: '3rem', border: '0 solid transparent', borderRadius: '1.5rem', backgroundColor: "#aaaaff" }}>
                <p>
                    {props.review}
                </p>
            </div>
        </div>
    );
}
export default ReviewCard;