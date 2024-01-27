import styles from "./MockMun24.module.scss";
import Faq from "../../Components/Pages/Contact/Faq/Faq";
import Navbar from "../../Components/Navbar/Navbar";
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
      <Navbar />
      <Hero />
      <About />
      <Card>
        <div className={styles.mainHeading}>
          <h1 className={styles.h1}>COMMITTEES</h1>
          <div className={styles.innerCont}>
            <div className={styles.imgParent}>
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1705864086/nitsmun/committee_yehz0a.svg"
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
                  Ea nisi maiores et internos praesentium et ipsa omnis est maiores
                  repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui
                  delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam
                  tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos
                  earum quaerat ea dignissimos minima et dolor galisum..
                </p>
                <div className={styles.bgCont}>
                  <button className={styles.bgBtn}>Background Guide</button>
                </div>
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
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1705864082/nitsmun/person_temp_uegudo.svg"
                alt="loading..."
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.innerParent}>
                <h1 className={styles.h1}>LOREM IPSUM</h1>
                <p className={styles.p}>
                  <p className={styles.innerPara}>
                    Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic
                    voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti.
                    Ea nisi maiores et internos praesentium et ipsa omnis est maiores
                    repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui
                    delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam
                    tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos
                    earum quaerat ea dignissimos minima et dolor galisum..
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Glimpses />
      <Faq />
    </div>
  );
};
export default MockMun24;
