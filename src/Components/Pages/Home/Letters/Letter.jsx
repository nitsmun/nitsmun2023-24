import styles from "./Letter.module.scss";
const FacultyMssg=()=>{
    return(
        <><b>Dear Delegates, respected Faculty Advisors, and the Secretariat,</b><br /><br />
            Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic     molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel qu voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima  et dolor galisum.
        </>
    );
}
const FacultyNextPara=()=>{
    return(
        <>
            Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.<br />
                Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.<br />
                Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.<br /><br /><br />
                <b>Warm Regards<br />
                Faculty Advisor<br />
                NITS MUN</b>
        </>
    );
}
const SgMssg=()=>{
    return(
        <>
            <b>Dear Delegates, respected Faculty Advisors, and the Secretariat,</b><br /><br />
            Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic     mol
            sestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel qu voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima  et dolor galisum.
        </>
    );
}
const SgNextPara=()=>{
    return(
        <>
            Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.<br />
                Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.<br />
                Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.<br /><br /><br />
                <b>Warm Regards<br />
                Secretary-General<br />
                NITS MUN</b>
        </>
    );
}
const Letter=(props)=>{
    return(
        <div className={styles.letter}>
            <h1>{props.title}</h1>
            <div className={styles.text}>
                <p>
                    <div className={styles.photowithtext}>
                    <div className={styles.photo}><img src={props.src} alt={props.alt} /></div>
                            <div className={styles.firstPara}>
                                {props.letter==="faculty advisor"?
                                <FacultyMssg />:<SgMssg />    
                            }
                                <div className={styles.photoname}>{props.Name}</div>
                            </div>
                    </div>
                    <div className={styles.nextpara}>
                        {props.letter==="faculty advisor"?<FacultyNextPara/>:<SgNextPara/>}
                    </div>
                </p>
            </div>
        </div>
    );
}
export default Letter;