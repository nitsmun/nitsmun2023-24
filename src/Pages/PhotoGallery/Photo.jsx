import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Photo.module.scss";
import Footer from "../../Components/Footer/Footer";
const Photo = () => {
  const photos = [
    {
      sl: 1,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1707127538/nitsmun/mockmun1_ulokow.jpg",
    },
    {
      sl: 2,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1707127536/nitsmun/mockmun2_qehbza.jpg",
    },
    {
      sl: 3,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1707127534/nitsmun/mockmun3_lp3fn7.jpg",
    },
    {
      sl: 4,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712669/nitsmun/gallery6_vw08yg.webp",
    },
    {
      sl: 5,
      src: "https://res.cloudinary.com/dp92qug2f/image/upload/v1679132667/nitsmun/juniormun2021/jmun_ss6_ka2xo6.webp",
    },
    {
      sl: 6,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712667/nitsmun/gallery1_srwzf8.webp",
    },
    {
      sl: 7,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712667/nitsmun/gallery5_n3dynj.webp",
    },
    {
      sl: 8,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712666/nitsmun/gallery3_x2blej.webp",
    },
    {
      sl: 9,
      src: "https://res.cloudinary.com/dhry5xscm/image/upload/v1706712666/nitsmun/gallery4_eyrcjr.webp",
    },
  ];
  const [scrollPos, setScrollPos] = useState(0);
  const [wideview, setWideview] = useState(0);
  const e = document.querySelector(":root");
  const photoDimension = window.getComputedStyle(e).getPropertyValue("--photoWidthPerc");
  const photo = (photoDimension / 100) * window.innerWidth;
  const scrollFunc = (direction) => {
    if (direction === "left" && scrollPos < photo * photos.length - 1000) {
      setScrollPos(scrollPos + 100);
    } else if (direction === "right" && scrollPos > 0) {
      setScrollPos(scrollPos - 100);
    }
    document.getElementById("photoViewer").scrollLeft = scrollPos;
    // console.log(scrollPos);
  };
  const photoClick = (photoId) => {
    setWideview(photoId);
  };
  const wideClick = () => {
    const element = document.activeElement.className;
    if (element === "_placardCont_10eq1_8") {
      setWideview(0);
    }
  };
  const rightClick = () => {
    if (wideview < photos.length) {
      setWideview(wideview + 1);
    }
  };
  return (
    <div className={styles.pageContainer}>
      <div>
        <Navbar page="PHOTO GALLERY" />
        <div className={styles.container}>
          <div className={styles.upperEllipse}>
            <div className={styles.upperInner}></div>
          </div>
          <div id="photoViewer" className={styles.photoViewer}>
            {photos.map((item) => (
              <button
                onClick={() => photoClick(item.sl)}
                className={styles.photo}
                tabIndex={item.sl}
                style={{
                  backgroundImage: `url('${item.src}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  color: "transparent",
                }}
              >
                .
              </button>
            ))}
          </div>
          <div className={styles.lowerEllipse}>
            <div className={styles.lowerInner}></div>
          </div>
          <div className={styles.navBtnCont}>
            <button
              onClick={() => scrollFunc("left")}
              className={`${styles.btn} ${styles.btnLeft}`}
              style={{
                visibility: `${scrollPos < photo * photos.length - 100 ? "visible" : "hidden"
                  }`,
              }}
            >
              ←
            </button>
            <button
              onClick={() => scrollFunc("right")}
              className={`${styles.btn} ${styles.btnRight}`}
              style={{ visibility: `${scrollPos > 0 ? "visible" : "hidden"}` }}
            >
              →
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={wideClick}
        onKeyUp={wideClick}
        data="widescreen"
        className={styles.placardCont}
        style={{
          backgroundImage: `url("${wideview === 0 ? "none" : photos[wideview - 1].src}")`,
          zIndex: `${wideview === 0 ? -3 : 4}`,
          backgroundColor: `${wideview === 0 ? "transparent" : "#00000055"}`,
        }}
      >
        <div
          className={styles.innerCont}
          style={{
            height: `${wideview === 0 ? "0%" : "100%"}`,
            width: `${wideview === 0 ? "0%" : "100%"}`,
            transition: "ease 500ms",
            border: "0px solid transparent",
            borderRadius: `${wideview === 0 ? "100%" : "0%"}`,
          }}
        >
          <div className={styles.cardCont}>
            <button
              onClick={() => setWideview(wideview - 1)}
              onFocus={() => setWideview(wideview - 1)}
              className={styles.btn}
            >
              <img
                alt="loading left arrow..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703194742/nitsmun/left_arrow_iuwjpu.svg"
              />
            </button>
            <div className={styles.cardSlide}>
              <div className={styles.card}>
                <img
                  className={styles.eachImg}
                  src={`${wideview === 0 ? "none" : photos[wideview - 1].src}`}
                  alt="loading.."
                />
                <h1 className={styles.h1}>{`${wideview === 0 ? "none" : photos[wideview - 1].sl
                  }`}</h1>
              </div>
            </div>
            <button onClick={rightClick} className={styles.btn}>
              <img
                alt="loading right arrow..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703194750/nitsmun/right_arrow_pudnyk.svg"
              />
            </button>
          </div>
        </div>
      </button>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Photo;
