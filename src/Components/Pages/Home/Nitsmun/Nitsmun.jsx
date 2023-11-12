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
                    Lorem ipsum dolor sit amet. Vel culpa rerum ut consequatur saepe et aperiam laboriosam non quis voluptatibus rem sint libero. Et recusandae assumenda et autem unde ut debitis Quis? In dolor omnis sit rerum autem et dolores molestiae ut nihil reprehenderit ab quas assumenda vel rerum officia ad nostrum dolores. Qui quidem placeat eum obcaecati dolores sed consequatur quia. Et quasi similique eum inventore explicabo et veniam culpa aut galisum voluptas aut cumque veritatis aut laboriosam molestiae ea dolor laborum. Et autem consequatur aut ullam accusamus et voluptates quidem quo aliquam corrupti!
                </p>
            </div>
            <div className={styles.btnCont}><Link to='' className={styles.aboutBtn}>About</Link></div>
        </div>
    );
}
export default Nitsmun;