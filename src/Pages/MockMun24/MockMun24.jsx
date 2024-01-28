import styles from "./MockMun24.module.scss";
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
        <h1 className={styles.name}>MOCK MUN 2024</h1>
        <h3 className={styles.h3}>Annual Conference Incandescence 2024</h3>
      </div>
      <div className={styles.paraCont}>
        <p className={styles.para}>
          `` After conducting numerous conferences, both online and offline, and hosting
          delegates from different schools and colleges from across the country, NITSMUN
          is all set for its conference scheduled to be held on the 12 and 13 March, 2022.
          Owing to the current situation, this conference will be conducted online, giving
          a chance to students from any nook and corner of the country or around the world
          to participate. We will be having three committees this year
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

const MockMun24 = () => {
  return (
    <div className={styles.MockMunPage}>
      <Navbar page="MOCKMUN24" />
      <Hero />
      <About />
      <Card>
        <div className={styles.mainHeading}>
          <h1 className={styles.h1}>COMMITTEES</h1>
          <div className={styles.innerCont}>
            <div className={styles.imgParent}>
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706381382/nitsmun/unsc_rkvged.webp"
                alt="loading..."
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.h1}>United Nations Security Council</h1>
              <p className={styles.p}>
                <p className={styles.innerPara}>
                  <b>Agenda:</b> Addressing State-Sponsored terrorism: examining
                  allegations and promoting regional stability in Asia with special
                  emphasis on Afghanistan, Pakistan and Syria.
                </p>
                <p className={styles.innerPara}>
                  The United Nations Security Council maintains global peace, with 15
                  member nations addressing threats through resolutions,sanctions, and
                  peacekeeping operations,aiming for collective security.
                </p>
                {/* <div className={styles.bgCont}>
                  <button className={styles.bgBtn}>Background Guide</button>
                </div> */}
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className={styles.mainHeading}>
          <h1 className={styles.h1}>EXECUTIVE BOARD</h1>
          <div className={styles.innerCont}>
            <div className={styles.imgParent}>
              <img
                src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706364601/IMG-20240102-WA0084_elvgyy.jpg"
                alt="loading..."
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.innerParent}>
                <h1 className={styles.h1}>MAYURAKHI KHAUND</h1>
                <p className={styles.p}>
                  <p className={styles.innerPara}>
                    Hey! I am Mayurakhi Khaund. I am 2nd year Civil Undergraduate student
                    at NITS. Also, I work as a content writer and as a marketing executive
                    for various clubs. MUN has always been something that intrigues me and
                    it&apos;s just an incredible platform to furnish skills in an
                    individual. I am really grateful to NITSMUN for giving me the
                    opportunity to participate and organise amazing conferences and now,
                    to chair one! Looking forward to creating unforgettable memories in
                    here. See you at the next upcoming session!
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Glimpses />
      <Faq />
      <Footer />
    </div>
  );
};
export default MockMun24;
