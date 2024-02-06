import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./AnnualConf.module.scss";
import Faq from "../../Components/Pages/Contact/Faq/Faq";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { UserContext } from "../../Context/ContextProv";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706616784/off_poster_f8mjht.webp"
        alt=""
      />
    </div>
  );
};

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.heading}>
        <h1 className={styles.name}>NITS MUN 2024</h1>
        <h3 className={styles.h3}>Annual Conference Incandescence 2024</h3>
      </div>
      <div className={styles.paraCont}>
        <p className={styles.para}>
          Step into a world where ideas dance, perspectives collide, and innovation takes
          center stage! We&apos;re thrilled to unveil the theme of our upcoming
          conference: &apos;Hues of Harmony&apos;! Picture this as a vibrant canvas of
          ideas, perspectives, and talents colliding to create something extraordinary.
          It&apos;s like a lively painting where each color plays a crucial role. This
          isn&apos;t your typical conference, it&apos;s a fusion of minds, a celebration
          of diversity, and a journey into the art of collaboration. We&apos;re not just
          talking about it, we&apos;re living it! Join us for an adventure where every
          voice counts, connections spark, and brilliance shines. Are you ready to become
          a part of it?
          <br />
          <br />
          Step into the realm of strategy and security with the{" "}
          <span id={styles.specialbold}>Intelligence Bureau</span> (IB) Committee at
          NITSMUN Annual Conference 2024! Join us on a journey to analyze, plan, and
          safeguard important events, all in the mission to protect the country and its
          integrity. Your voice matters in addressing concerns and playing a pivotal role
          in ensuring security. Join the conference to contribute your perspective to the
          strategic discussions.
          <br />
          <br />
          The{" "}
          <span id={styles.specialbold}>
            &quot;Special Council of Hastinapur&quot; (Mahabharat){" "}
          </span>{" "}
          committee is designed to simulate pivotal diplomatic events from the Mahabharat,
          offering delegates a platform to navigate intricate political landscapes, forge
          alliances, and strategize for the kingdom of Hastinapur. Prepare for intense
          debates, historical intricacies, and an immersive diplomatic experience. Secure
          your spot, and let&apos;s write history together!
          <br />
          <br />
          The{" "}
          <span id={styles.specialbold}>
            United Nations Human Rights Council (UNHRC)&quot;
          </span>
          &quot; committee is a cornerstone of intellectual discourse in the vibrant
          tapestry of Incandescence! This committee is crafted to emulate the dynamic
          realm of international diplomacy, where delegates will grapple with pressing
          human rights issues, engage in diplomatic maneuvers, and work towards
          collaborative solutions. Get ready for impassioned debates, diplomatic
          intricacies, and a profound exploration of global affairs. Embrace the
          opportunity to be a part of this consequential council, where your voice shapes
          the discourse on human rights. Secure your spot, and let the spirit of diplomacy
          illuminate the path to constructive resolutions. Together, let&apos;s embark on
          a journey to make a lasting impact on the world stage!
          <br />
          <br />
          The <span id={styles.specialbold}>International Press Corps(IPC)</span> is a
          committee where people who love writing, taking pictures, and fair journalism
          come together. Each journalist is teamed up with a famous news agency and given
          the job of watching and reporting on debates in other committees. They have to
          capture interesting moments and send reports every day. And you know what&apos;s
          cool? It&apos;s not just serious stuff; there&apos;s a lot of fun too! Imagine
          enjoying the lively discussions on the house floor – journalism with a dose of
          fun!
        </p>
      </div>

      <div id={styles.posterconfoff}>
        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706614577/hues_of_harmony_copy_lp7kcl.webp"
          alt=""
        />
      </div>
    </div>
  );
};

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

const Glimpses = () => {
  return (
    <div className={styles.glimpses}>
      <div className={styles.headerCont}>
        <h1 className={styles.h1}>Some Glimpses of NITSMUN 2023</h1>
      </div>
      <Swiper
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation]}
        className={styles.innerCont}
      >
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712667/nitsmun/gallery7_zpeejq.webp"
            alt="photo1"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712669/nitsmun/gallery6_vw08yg.webp"
            alt="photo2"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712668/nitsmun/gallery2_rsusrz.webp"
            alt="photo3"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712666/nitsmun/gallery3_x2blej.webp"
            alt="photo4"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712666/nitsmun/gallery4_eyrcjr.webp"
            alt="photo5"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712667/nitsmun/gallery5_n3dynj.webp"
            alt="photo6"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712668/nitsmun/gallery9_eyvcia.webp"
            alt="photo7"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712668/nitsmun/gallery2_rsusrz.webp"
            alt="photo8"
            className={styles.photo}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.photoCont}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706712667/nitsmun/gallery1_srwzf8.webp"
            alt="photo9"
            className={styles.photo}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const AnnualConf = () => {
  const [wideview, setWideview] = useState(false);
  const [wide, setWide] = useState({
    title: "",
    agenda: "",
    banner: "",
    desc: "",
    bg: "",
    register: "",
  });
  const moreDetails = (Title, Agenda, Banner, Desc) => {
    setWideview((prev) => !prev);
    setWide({
      title: Title,
      agenda: Agenda,
      banner: Banner,
      desc: Desc,
      bg: "",
      register: "",
    });
  };
  const wideClick = () => {
    setWideview(false);
  };

  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
  const handleRegister = (e) => {
    e.preventDefault();
    if (isLoggedIn === true) {
      navigate("/registration");
    } else {
      navigate("/signup");
      toast.error("Please login or signup to register for the event");
    }
  };
  useEffect(() => {
    document.title = "Annual Conference 2024 | NITSMUN";
  }, []);
  return (
    <>
      {wideview && (
        <div className={styles.wideview}>
          <div className={styles.wideCard}>
            <div className={styles.exitCont}>
              <button onClick={wideClick} className={styles.exit}>
                <img
                  className={styles.cross}
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg"
                  alt="cross"
                />
              </button>
            </div>
            <h1 className={styles.h1}>{wide.title}</h1>
            <h2 className={styles.h2}>
              <b>Agenda: </b>
              {wide.agenda}
            </h2>
            <img src={wide.banner} alt="loading.." className={styles.bannerImg} />
            <p className={styles.desc}>{wide.desc}</p>
            <div className={styles.infoBtnContPopup}>
              <button className={styles.infoBtnPopup} onClick={handleRegister}>
                Register Now
              </button>
              <button
                className={styles.infoBtnPopup}
                onClick={() => toast("Link has not been activated yet!")}
              >
                Background Guide
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.MockMunPage}>
        <Navbar page="MOCKMUN24" />
        <div className={styles.innerChild}>
          <Hero />
          <About />
          <Card>
            <div className={styles.mainHeading}>
              <h1 className={styles.mainh1}>COMMITEES</h1>
              <div className={styles.innerCont1}>
                <div className={styles.imgParent}>
                  <img
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/hastinapur_x7vijo.jpg"
                    alt=""
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.h1}>Hastinapur Special Council</h1>
                  <p className={styles.p}>
                    <p className={styles.innerPara}>
                      <b>Agenda:</b> Ethical Maze in Mahabharata: Unveiling the Intrigues
                      of &quot;Cheer Haran&quot; and the Moral Labyrinth Faced by
                      Characters.
                    </p>
                    {/* <p className={styles.innerPara}>
                      Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore.
                    </p> */}
                  </p>
                  <div className={styles.infoBtnCont}>
                    <button className={styles.infoBtn} onClick={handleRegister}>
                      Register Now
                    </button>
                    <button
                      className={styles.infoBtn}
                      onClick={() => toast("Link has not been activated yet!")}
                    >
                      Background Guide
                    </button>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "Hastinapur Special Council",
                          "Ethical Maze in Mahabharata: Unveiling the Intrigues of 'Cheer Haran' and the Moral Labyrinth Faced by Characters.",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/hastinapur_x7vijo.jpg",
                          "Welcome to the 'Special Council of Hastinapur' at NITSMUN! This committee is designed to simulate pivotal diplomatic events from the Mahabharat, offering delegates a platform to navigate intricate political landscapes, forge alliances, and strategize for the kingdom of Hastinapur. Prepare for intense debates, historical intricacies, and an immersive diplomatic experience. Secure your spot, and let's write history together!"
                        )
                      }
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainHeading}>
              <div className={styles.innerCont2}>
                <div className={styles.imgParent}>
                  <img
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/unhrc_24_qvqtzx.jpg"
                    alt=""
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.h1}>UNHRC</h1>
                  <p className={styles.p}>
                    <p className={styles.innerPara}>
                      <b>Agenda:</b> Addressing the Ongoing Atrocities in Israel-Palestine
                      with Main Focus On Violence Against Women and childern
                    </p>
                    {/* <p className={styles.innerPara}>
                      Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. .
                    </p> */}
                  </p>
                  <div className={styles.infoBtnCont}>
                    <button className={styles.infoBtn} onClick={handleRegister}>
                      Register Now
                    </button>
                    <button
                      className={styles.infoBtn}
                      onClick={() => toast("Link has not been activated yet!")}
                    >
                      Background Guide
                    </button>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "UNHRC",
                          "Addressing the Ongoing Atrocities in Israel-Palestine with Main Focus On Violence Against Women and childern",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/unhrc_24_qvqtzx.jpg",
                          "Welcome to the 'United Nations Human Rights Council (UNHRC)' at NITSMUN, a cornerstone of intellectual discourse in the vibrant tapestry of Incandescence! This committee is crafted to emulate the dynamic realm of international diplomacy, where delegates will grapple with pressing human rights issues, engage in diplomatic maneuvers, and work towards collaborative solutions. Get ready for impassioned debates, diplomatic intricacies, and a profound exploration of global affairs. Embrace the opportunity to be a part of this consequential council, where your voice shapes the discourse on human rights. Secure your spot, and let the spirit of diplomacy illuminate the path to constructive resolutions. Together, let's embark on a journey to make a lasting impact on the world stage!"
                        )
                      }
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainHeading}>
              <div className={styles.innerCont1}>
                <div className={styles.imgParent}>
                  <img
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/ipc_2024_ajldq6.jpg"
                    alt=""
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.h1}>IPC- International Press Conferences </h1>
                  <p className={styles.p}>
                    <p className={styles.innerPara}>
                      <b>Agenda:</b> Coming soon..
                    </p>
                    {/* <p className={styles.innerPara}>
                      The United Nations Security Council maintains global peace, with 15
                      member nations addressing threats through resolutions,sanctions, and
                      peacekeeping operations,aiming for collective security.
                    </p> */}
                  </p>
                  <div className={styles.infoBtnCont}>
                    <button className={styles.infoBtn} onClick={handleRegister}>
                      Register Now
                    </button>
                    <button
                      className={styles.infoBtn}
                      onClick={() => toast("Link has not been activated yet!")}
                    >
                      Background Guide
                    </button>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "IPC- International Press Conferences",
                          "",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/ipc_2024_ajldq6.jpg",
                          "The International Press Corps(IPC) is a committee where people who love writing, taking pictures, and fair journalism come together. Each journalist is teamed up with a famous news agency and given the job of watching and reporting on debates in other committees. They have to capture interesting moments and send reports every day. And you know what's cool? It's not just serious stuff; there's a lot of fun too! Imagine enjoying the lively discussions on the house floor – journalism with a dose of fun!"
                        )
                      }
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainHeading}>
              <div className={styles.innerCont2}>
                <div className={styles.imgParent}>
                  <img
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/ib_wbiqww.jpg"
                    alt=""
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.h1}>IB- Intelligence Bureau</h1>
                  <p className={styles.p}>
                    <p className={styles.innerPara}>
                      <b>Agenda:</b> Analysing Security Measures for the Ram Mandir
                      Inauguration – Evaluating Concerns, Crowd Logistics, and
                      Precautionary Protocols.
                    </p>
                    {/* <p className={styles.innerPara}>
                      The United Nations Security Council maintains global peace, with 15
                      member nations addressing threats through resolutions,sanctions, and
                      peacekeeping operations,aiming for collective security.
                    </p> */}
                  </p>
                  <div className={styles.infoBtnCont}>
                    <button className={styles.infoBtn} onClick={handleRegister}>
                      Register Now
                    </button>
                    <button
                      className={styles.infoBtn}
                      onClick={() => toast("Link has not been activated yet!")}
                    >
                      Background Guide
                    </button>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "IB- Intelligence Bureau",
                          "Analysing Security Measures for the Ram Mandir Inauguration – Evaluating Concerns, Crowd Logistics, and Precautionary Protocols.",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/ib_wbiqww.jpg",
                          "Step into the realm of strategy and security with the Intelligence Bureau (IB) Committee at NITSMUN Annual Conference 2024! Join us on a journey to analyze, plan, and safeguard important events, all in the mission to protect the country and its integrity. Your voice matters in addressing concerns and playing a pivotal role in ensuring security. Join the conference to contribute your perspective to the strategic discussions."
                        )
                      }
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className={styles.mainHeading}>
              <h1 className={styles.h1}>EXECUTIVE BOARD</h1>
              <div className={styles.innerCont1}>
                <div className={styles.imgParent}>
                  {/* <img
                    src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706367691/prof_rg9g0w.jpg"
                    alt="loading..."
                    className={styles.img}
                  /> */}
                </div>
                <div className={styles.content}>
                  <div className={styles.innerParent}>
                    <h1 className={styles.h1}>TO BE ANNOUNCED...</h1>
                    <p className={styles.p}>
                      {/* <p className={styles.innerPara}>
                        Hey! I am Mayurakhi Khaund. I am 2nd year Civil Undergraduate student
                        at NITS. Also, I work as a content writer and as a marketing executive
                        for various clubs. MUN has always been something that intrigues me and
                        it&apos;s just an incredible platform to furnish skills in an
                        individual. I am really grateful to NITSMUN for giving me the
                        opportunity to participate and organise amazing conferences and now,
                        to chair one! Looking forward to creating unforgettable memories in
                        here. See you at the next upcoming session!
                      </p> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Glimpses />
          <Faq color="#1d1c41" />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default AnnualConf;
