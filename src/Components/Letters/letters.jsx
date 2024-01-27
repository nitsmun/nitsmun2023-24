/* eslint-disable check-file/filename-naming-convention */
import React from "react";
import styles from "./Letter.module.scss";

const letter = (props) => {
  return (
    <div className={styles.letter}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.h1}>Letters From {props.title}</h1>
        </div>

        <div className={styles.pera}>
          <div className={styles.textImageContainer}>
            <img src={props.src} alt={styles.secGen} />
            <div>
              <p className={styles.peraHeading}>
                Dear Delegates, respected Faculty Advisors, and the Secretariat
              </p>
              <p className={`${styles.messagefrmFic} ${styles.p}`}>
                Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas
                quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi
                maiores et internos praesentium et ipsa omnis est maiores repudiandae eos
                aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum
                dolor aliquid eum deleniti dolore. Vel qu voluptas quam et nemo quibusdam
                et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor
                galisum.{" "}
              </p>
            </div>
          </div>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos
            ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et
            internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur
            pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum
            deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et
            explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.
          </p>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos
            ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et
            internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur
            pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum
            deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et
            explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Warm Regards</p>
        <p>{props.name} </p>
        <p>{props.title}</p>
        <p>NITS MUN</p>
      </div>
    </div>
  );
};
export default letter;
