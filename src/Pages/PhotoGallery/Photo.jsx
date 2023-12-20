import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Photo.module.scss";
const Photo = () => {
  const photos = [
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
    "https://res.cloudinary.com/dhry5xscm/image/upload/v1702577697/nitsmun/photo_template_yyaefo.png",
  ];
  return (
    <div>
      <Navbar page="PHOTO GALLERY" />
      <div className={styles.container}>
        <div className={styles.upperEllipse}></div>
        <div className={styles.photoViewer}>
          {photos.map((item) => (
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url('${item}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          ))}
        </div>
        <div className={styles.lowerEllipse}></div>
      </div>
    </div>
  );
};
export default Photo;
