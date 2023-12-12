import styles from './Nitsmun.module.scss';
import {Link} from "react-router-dom";
const Info=(props)=>{
    return(
        <div className={styles.info}>
            <h1>{props.number}</h1>
            <h3>{props.desc}</h3>
        </div>
    );
}
const Nitsmun=()=>{
    return(
        <div className={styles.Nitsmun}>
            <div className={styles.logoCont}>
                <Info number="700+" desc="Delegates hosted till date" />
                <Info number="57" desc="Secretariat Members" />
                <Info number="50+" desc="Executive Board Overall" />
            </div>
            <div className={styles.description}>
                <h1>What is NITS MUN?</h1>
                <p>
                NITSMUN was founded in 2014 when a group of like-minded people wanted to create a society for younger people to discuss, debate, and deliberate present-day crises whilst experiencing themselves being in the shoes of various world leaders. Ever since the first MUN session in 2014, our society has grown manifold with more enthusiastic people joining in and helping us emerge as one the best and most promising MUN societies in NE India. Our conference offers its delegates an unrivaled Model UN experience by running highly personalized, engaging, and dynamic committees.<br/><br/>
Besides having participated in various MUNs in and around the country and bringing home numerous accolades and valuable experience, we have also hosted MUNs every single year since, with multiple mock sessions and collaborative conferences with world-class universities, with awe-inspiring members of the EB training and guiding us to think rationally, act quickly and solve modern-day problems and at the same time also provide us with the support required. NITSMUN aims at polishing the interpersonal, debating, and deliberating skills of the participants and mold them into a leader of tomorrow.
                </p>
            </div>
            <div className={styles.btnCont}><Link to='' className={styles.aboutBtn}>About</Link></div>
        </div>
    );
}
export default Nitsmun;