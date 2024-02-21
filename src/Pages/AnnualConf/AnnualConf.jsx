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
  const moreDetails = (Title, Agenda, Banner, Desc, bg) => {
    setWideview((prev) => !prev);
    setWide({
      title: Title,
      agenda: Agenda,
      banner: Banner,
      desc: Desc,
      bg: bg,
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
              {wide.bg === "" ?
                null : <a
                  className={styles.infoBtnPopup}
                  href={wide.bg}
                >
                  Background Guide
                </a>}
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
                    <a
                      href="https://drive.google.com/file/d/19-6zDrWK1m4-ehJciQxeFJZdRKSA3Um-/view"
                      className={styles.infoBtn}
                    >
                      Background Guide
                    </a>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "Hastinapur Special Council",
                          "Ethical Maze in Mahabharata: Unveiling the Intrigues of 'Cheer Haran' and the Moral Labyrinth Faced by Characters.",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/hastinapur_x7vijo.jpg",
                          "Welcome to the 'Special Council of Hastinapur' at NITSMUN! This committee is designed to simulate pivotal diplomatic events from the Mahabharat, offering delegates a platform to navigate intricate political landscapes, forge alliances, and strategize for the kingdom of Hastinapur. Prepare for intense debates, historical intricacies, and an immersive diplomatic experience. Secure your spot, and let's write history together!",
                          "https://drive.google.com/file/d/19-6zDrWK1m4-ehJciQxeFJZdRKSA3Um-/view"
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
                    <a
                      className={styles.infoBtn}
                      href="https://drive.google.com/file/d/1q4V4wiAMEzeG84k9z8CGsIzWL3ew3F8X/view?usp=drive_link"
                    >
                      Background Guide
                    </a>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "UNHRC",
                          "Addressing the Ongoing Atrocities in Israel-Palestine with Main Focus On Violence Against Women and childern",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/unhrc_24_qvqtzx.jpg",
                          "Welcome to the 'United Nations Human Rights Council (UNHRC)' at NITSMUN, a cornerstone of intellectual discourse in the vibrant tapestry of Incandescence! This committee is crafted to emulate the dynamic realm of international diplomacy, where delegates will grapple with pressing human rights issues, engage in diplomatic maneuvers, and work towards collaborative solutions. Get ready for impassioned debates, diplomatic intricacies, and a profound exploration of global affairs. Embrace the opportunity to be a part of this consequential council, where your voice shapes the discourse on human rights. Secure your spot, and let the spirit of diplomacy illuminate the path to constructive resolutions. Together, let's embark on a journey to make a lasting impact on the world stage!",
                          "https://drive.google.com/file/d/1q4V4wiAMEzeG84k9z8CGsIzWL3ew3F8X/view?usp=drive_link"
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
                      <b>Agenda:</b> The International Press Corps(IPC) is a committee where people who love writing, taking pictures, and fair journalism come together. Each journalist is teamed up with a famous news agency and given the job of watching and reporting on debates in other committees. They have to capture interesting moments and send reports every day. And you know what&apos;s cool? It&apos;s not just serious stuff; there&apos;s a lot of fun too! Imagine enjoying the lively discussions on the house floor – journalism with a dose of fun!
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
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "IPC- International Press Conferences",
                          "",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/ipc_2024_ajldq6.jpg",
                          "The International Press Corps(IPC) is a committee where people who love writing, taking pictures, and fair journalism come together. Each journalist is teamed up with a famous news agency and given the job of watching and reporting on debates in other committees. They have to capture interesting moments and send reports every day. And you know what's cool? It's not just serious stuff; there's a lot of fun too! Imagine enjoying the lively discussions on the house floor – journalism with a dose of fun!",
                          ""
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
                    <a
                      className={styles.infoBtn}
                      href="https://drive.google.com/drive/folders/1gv1_vS-3iPH5oV2VM38cm-hrK1oDRlhO?usp=sharing"
                    >
                      Background Guide
                    </a>
                    <button
                      className={styles.detailsBtn}
                      onClick={() =>
                        moreDetails(
                          "IB- Intelligence Bureau",
                          "Analysing Security Measures for the Ram Mandir Inauguration – Evaluating Concerns, Crowd Logistics, and Precautionary Protocols.",
                          "https://res.cloudinary.com/dp92qug2f/image/upload/v1706595374/ib_wbiqww.jpg",
                          "Step into the realm of strategy and security with the Intelligence Bureau (IB) Committee at NITSMUN Annual Conference 2024! Join us on a journey to analyze, plan, and safeguard important events, all in the mission to protect the country and its integrity. Your voice matters in addressing concerns and playing a pivotal role in ensuring security. Join the conference to contribute your perspective to the strategic discussions.",
                          "https://drive.google.com/drive/folders/1gv1_vS-3iPH5oV2VM38cm-hrK1oDRlhO"
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
              <Swiper navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Navigation]} className={styles.eb}>
                <SwiperSlide className={styles.innerCont1}>
                  <div className={styles.imgParent}>
                    <img
                      src="https://res.cloudinary.com/dhry5xscm/image/upload/v1708416512/nitsmun/sounak_sengupta_nimxjf.jpg"
                      alt="loading..."
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.innerParent}>
                      <h1 className={styles.h1}>Sounak Sengupta</h1>
                      <p className={styles.p}>
                        <p className={styles.innerPara}>
                          Mr Sounak Sengupta as the Chairperson for Intelligence Bureau. Sounak Sengupta, a physics post graduate student, has been doing MUNs since 2018. Apart from his academic persuasions, he takes keen interest in debates and public speaking.
                        </p>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.innerCont1}>
                  <div className={styles.imgParent}>
                    <img
                      src="https://res.cloudinary.com/dhry5xscm/image/upload/v1708416612/nitsmun/prathmesh_repal_vjhrlg.jpg"
                      alt="loading..."
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.innerParent}>
                      <h1 className={styles.h1}>Prathmesh Repal</h1>
                      <p className={styles.p}>
                        <p className={styles.innerPara}>
                          Mr. Prathamesh Repal as the Chairperson for UNHRC. As he takes the helm as the  Chairperson for the UNHRC simulation at NITS 2024, his passion for fostering a conducive and inclusive committee atmosphere shines through. He strives to uphold the essence of MUNs as a breeding ground for creative ideas and solutions.
                        </p>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.innerCont1}>
                  <div className={styles.imgParent}>
                    <img
                      src="https://res.cloudinary.com/dhry5xscm/image/upload/v1708416729/nitsmun/david_das_tlqeld.jpg"
                      alt="loading..."
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.innerParent}>
                      <h1 className={styles.h1}>David Das</h1>
                      <p className={styles.p}>
                        <p className={styles.innerPara}>
                          Mr David Das as the Chairperson for Hastinapur Special Council. With over 100 MUNs under his belt, he is a master of debating and diplomacy, and a gifted speaker. One of his crowning achievements was attending a MUN conference at the UN Headquarters in New York in 2017, where he won the “Best Delegation” Award for his outstanding performance at the UNHQ.
                        </p>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.innerCont1}>
                  <div className={styles.imgParent}>
                    <img
                      src="https://res.cloudinary.com/dhry5xscm/image/upload/v1708447587/bhaswar_wa2ib3.webp"
                      alt="loading..."
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.innerParent}>
                      <h1 className={styles.h1}>Bhaswar Agnivesh</h1>
                      <p className={styles.p}>
                        <p className={styles.innerPara}>
                          Hey! I am Bhaswar Agnivesh. I am 2nd year Electronics & Communication Undergraduate student
                          at NITS. MUN has always been something that intrigues me and
                          it&apos;s just an incredible platform to furnish skills in an
                          individual. I am really grateful to NITSMUN for giving me the
                          opportunity to participate and organise amazing conferences and now,
                          to chair one! Looking forward to creating unforgettable memories in
                          here. See you at the next upcoming session!
                        </p>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Card>
          <div className={styles.sponsor}>
            <h1 className={styles.sponsorHeading}>Proudly co-sponsored by</h1>
         
            <div className={styles.sponsorContent}>
              <a href="https://www.cogg.io/" target="_blank">
                  <img className={styles.img} src="https://res.cloudinary.com/dfpklvfbt/image/upload/v1708520672/cogg_dsqslm.png" alt="cogg" />
              </a>
              </div>
                    
          </div>
          
          <Glimpses />
          <Faq color="#1d1c41" />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default AnnualConf;
