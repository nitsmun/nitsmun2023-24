import Navbar from "../../Components/Navbar/Navbar";
import TeamCard from "./TeamCard";
import styles from "./Team.module.scss";
import { Secretariat, Secretariatjr, Secretariatmediajr, Secretariatresearchjr, Secretariatprjr, Secretariatwebjr } from './db.jsx';
const Team = () => {
  return (
    <div className={styles.teamPage}>
      <Navbar />
      <div
        style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        className={styles.TeamContainer}
      >
        <h1 className={styles.teamHeading} style={{ color: '#1D1C41', margin: '0 auto' }}>MEET THE TEAM</h1>
        <h1 className={styles.posHeading}>SECRETARIAT</h1>
        <div className={styles.fourthYear}>
          {Secretariat.map((item, index) => <TeamCard web={item.post === "Director Technical Operations" ? true : false} fb={item.fb} mail={item.mail} linkedin={item.linkedin} img={item.imgsrc} name={item.name} designation={item.post} />)}
        </div>
        <hr style={{ width: '80%', height: '1px', margin: '0 auto' }}></hr>
        <div className={styles.fourthYear}>
          {Secretariatjr.map((item, index) => <TeamCard web={item.post === "Deputy Director Technical Operations" ? true : false} fb={item.fb} insta={item.mail} linkedin={item.linkedin} img={item.imgsrc} name={item.name} designation={item.post} />)}
        </div>
        <h1 className={styles.posHeading}>MEDIA AND DESIGN TEAM</h1>
        <div className={styles.fourthYear}>
          {Secretariatmediajr.map((item, index) => <TeamCard web={false} fb={item.fb} insta={item.mail} linkedin={item.linkedin} img={item.imgsrc} name={item.name} designation={item.post} />)}
        </div>
        <h1 className={styles.posHeading}>RESEARCH AND DEVELOPMENT TEAM</h1>
        <div className={styles.fourthYear}>
          {Secretariatresearchjr.map((item, index) => <TeamCard web={false} fb={item.fb} insta={item.mail} linkedin={item.linkedin} img={item.imgsrc} name={item.name} designation={item.post} />)}
        </div>
        <h1 className={styles.posHeading}>PUBLIC RELATIONS AND OUTREACH TEAM</h1>
        <div className={styles.fourthYear}>
          {Secretariatprjr.map((item, index) => <TeamCard web={false} fb={item.fb} insta={item.mail} linkedin={item.linkedin} img={item.imgsrc} name={item.name} designation={item.post} />)}
        </div>
        <h1 className={styles.posHeading}>WEB DEVELOPMENT TEAM</h1>
        <div className={styles.fourthYear}>
          {Secretariatwebjr.map((item, index) => <TeamCard web={true} fb={item.fb} insta={item.mail} linkedin={item.linkedin} img={item.imgsrc} name={item.name} designation={item.post} />)}
        </div>
      </div>
    </div>
  );
};
export default Team;
