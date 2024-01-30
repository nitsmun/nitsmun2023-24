import { toast } from "sonner";
import { useState } from "react";
import styles from "./AnnualConf.module.scss";
import Faq from "../../Components/Pages/Contact/Faq/Faq";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Hero = () => {
  return <div className={styles.hero}>.</div>;
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
          `` After conducting numerous conferences, both online and offline, and hosting delegates from different schools and colleges from across the country, NITSMUN is all set for its conference scheduled to be held on the 12 and 13 March, 2024. Owing to the current situation, this conference will be conducted online, giving a chance to students from any nook and corner of the country or around the world to participate.
          We will be having three committees this year:

          UNSC (United Nations Security Council), with the agenda “The Occupation of major water ways for strong military presence overseas and it&apos;ls impact on overseas trade.”

          UNEP (United Nations Environment Programme), with the agenda “Eliminating the domestic and international trafficking and illegal trade of wildlife ”.

          IPC (International Press Corps) which will allow participants to act as unbiased journalists, reporting on the proceedings of each simulation in the Conference. They will get a chance to investigate committee debates, conduct interviews, edit articles, and cover press conferences. &quot;If you prefer writing over speaking, be a member of the International Press and keep a check on the delegates!&quot;
        </p>
        <p className={styles.para}>
          UNSC (United Nations Security Council), with the agenda “The Occupation of major
          water ways for strong military presence overseas and it&pos;s impact on overseas
          trade.”
        </p>
        <p className={styles.para}>
          UNEP (United Nations Environment Programme), with the agenda “Eliminating the
          domestic and international trafficking and illegal trade of wildlife ”.
        </p>
        <p className={styles.para}>
          IPC (International Press Corps) which will allow participants to act as unbiased
          journalists, reporting on the proceedings of each simulation in the Conference.
          They will get a chance to investigate committee debates, conduct interviews,
          edit articles, and cover press conferences. &quot;If you prefer writing over
          speaking, be a member of the International Press and keep a check on the
          delegates!&quot;
        </p>
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
      <div className={styles.innerCont}>
        <img
          className={styles.photoCont}
          alt="loading..."
          src="https://res.cloudinary.com/dhry5xscm/image/upload/v1705864080/nitsmun/foot_bg_qgtjeq.svg"
        />
      </div>
    </div>
  );
};

const AnnualConf = () => {
  const [wideview, setWideview] = useState(false);
  const [wide, setWide] = useState({ title: "", agenda: "", banner: "", desc: "", bg: "", register: "" });
  const moreDetails = (Title, Agenda, Banner, Desc) => {
    setWideview((prev) => !prev);
    setWide(
      {
        title: Title, agenda: Agenda, banner: Banner, desc: Desc, bg: "", register: ""
      }
    );
  }
  const wideClick = () => {
    setWideview(false);
  }
  return (
    <>
      {wideview &&
        <div className={styles.wideview}>
          <div className={styles.wideCard}>
            <div className={styles.exitCont}><button onClick={wideClick} className={styles.exit}><img className={styles.cross} src="https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg" alt="cross" /></button></div>
            <h1 className={styles.h1}>{wide.title}</h1>
            <h2 className={styles.h2}><b>Agenda: </b>{wide.agenda}</h2>
            <img src={wide.banner} alt="loading.." className={styles.bannerImg} />
            <p className={styles.desc}>{wide.desc}</p>
            <div className={styles.infoBtnContPopup}>
              <button className={styles.infoBtnPopup} onClick={() => toast("Link has not been activated yet!")}>
                Register Now
              </button>
              <button className={styles.infoBtnPopup} onClick={() => toast("Link has not been activated yet!")} >
                Background Guide
              </button>
            </div>
          </div>
        </div>
      }
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
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp"
                    alt="loading..."
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.h1}>Hastinapur Special Council</h1>
                  <p className={styles.p}>
                    <p className={styles.innerPara}>
                      <b>Agenda:</b> Ethical Maze in Mahabharata: Unveiling the Intrigues of &quot;Cheer Haran&quot; and the Moral Labyrinth Faced by Characters.
                    </p>
                    {/* <p className={styles.innerPara}>
                      Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore.
                    </p> */}
                  </p>
                  <div className={styles.infoBtnCont}>
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")}>
                      Register Now
                    </button>
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")} >
                      Background Guide
                    </button>
                    <button className={styles.detailsBtn} onClick={() => moreDetails("Hastinapur Special Council", "Ethical Maze in Mahabharata: Unveiling the Intrigues of 'Cheer Haran' and the Moral Labyrinth Faced by Characters.", "https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp", "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is  overing the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.")}>
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
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp"
                    alt="loading..."
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.h1}>UNHRC</h1>
                  <p className={styles.p}>
                    <p className={styles.innerPara}>
                      <b>Agenda:</b> Addressing the Ongoing Atrocities in Israel-Palestine with Main Focus On Violence Against Women and childern

                    </p>
                    {/* <p className={styles.innerPara}>
                      Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. .
                    </p> */}

                  </p>
                  <div className={styles.infoBtnCont}>
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")}>
                      Register Now
                    </button>
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")} >
                      Background Guide
                    </button>
                    <button className={styles.detailsBtn} onClick={() => moreDetails("United Nations Security Council", "Lorem Ipsum", "https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp", "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is  overing the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.")}>
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
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp"
                    alt="loading..."
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
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")}>
                      Register Now
                    </button>
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")} >
                      Background Guide
                    </button>
                    <button className={styles.detailsBtn} onClick={() => moreDetails("United Nations Security Council", "Lorem Ipsum", "https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp", "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is  overing the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.")}>
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
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp"
                    alt="loading..."
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.h1}>IB- Intelligence Bureau</h1>
                  <p className={styles.p}>
                    <p className={styles.innerPara}>
                      <b>Agenda:</b>  Analysing Security Measures for the Ram Mandir Inauguration – Evaluating Concerns, Crowd Logistics, and Precautionary Protocols.
                    </p>
                    {/* <p className={styles.innerPara}>
                      The United Nations Security Council maintains global peace, with 15
                      member nations addressing threats through resolutions,sanctions, and
                      peacekeeping operations,aiming for collective security.
                    </p> */}
                  </p>
                  <div className={styles.infoBtnCont}>
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")}>
                      Register Now
                    </button>
                    <button className={styles.infoBtn} onClick={() => toast("Link has not been activated yet!")} >
                      Background Guide
                    </button>
                    <button className={styles.detailsBtn} onClick={() => moreDetails("United Nations Security Council", "Lorem Ipsum", "https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp", "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. Richard McClintock, a Latin scholar from Hampden-Sydney College, is  overing the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.")}>
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
                  <img
                    src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706367691/prof_rg9g0w.jpg"
                    alt="loading..."
                    className={styles.img}
                  />
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
        </div >
        <Footer />
      </div >
    </>
  );
};
export default AnnualConf;
