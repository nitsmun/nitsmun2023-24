import Navbar from "../../Components/Navbar/Navbar";
import TeamCard from "./TeamCard";
import styles from "./Team.module.css"
const Team = () => {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }} className={styles.TeamContainer}>
                <TeamCard name="Maruf Padaya" designation="Secretary General" img="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676476439/events/nitsmun/team/marufPadaya_faj39h.jpg" />
                <TeamCard name="Maruf Padaya" designation="Secretary General" img="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676476439/events/nitsmun/team/marufPadaya_faj39h.jpg" />
            </div>
        </>
    );
}
export default Team;