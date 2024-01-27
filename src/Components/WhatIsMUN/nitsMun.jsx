/* eslint-disable check-file/filename-naming-convention */
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NitsMun.module.scss";

const Nitsmun = () => {
  const navigate = useNavigate();
  const handleGoToAbout = (e) => {
    e.preventDefault();
    navigate("/about");
  };
  return (
    <div className={styles.container}>
      <div className={styles.img1}>
        <div className={styles.wing}>
          <div className={styles.text}>
            <h1 className={styles.h1}>700+</h1>
            <p className={styles.imgPera}>Delegates hosted till date</p>
          </div>
        </div>
        <div className={styles.wing}>
          <div className={styles.text}>
            <h1 className={styles.h1}>51</h1>
            <p className={styles.imgPera}>Secretariat Members</p>
          </div>
        </div>
      </div>
      <div className={styles.img3}>
        <div className={styles.wing}>
          <div className={styles.text}>
            <h1 className={styles.h1}>50+</h1>
            <p className={styles.imgPera}>Executive Board overall </p>
          </div>
        </div>
      </div>
      <div className={styles.contant}>
        <h1 className={styles.contantH1}>What is NITS MUN?</h1>
        <p className={styles.contantpera}>
          Lorem ipsum dolor sit amet. Vel culpa rerum ut consequatur saepe et aperiam
          laboriosam non quis voluptatibus rem sint libero. Et recusandae assumenda et
          autem unde ut debitis Quis? In dolor omnis sit rerum autem et dolores molestiae
          ut nihil reprehenderit ab quas assumenda vel rerum officia ad nostrum dolores.
          Qui quidem placeat eum obcaecati dolores sed consequatur quia. Et quasi
          similique eum inventore explicabo et veniam culpa aut galisum voluptas aut
          cumque veritatis aut laboriosam molestiae ea dolor laborum. Et autem consequatur
          aut ullam accusamus et voluptates quidem quo aliquam corrupti!
        </p>
      </div>
      <div className={styles.btn}>
        <button onClick={handleGoToAbout} className={styles.button}>
          About
        </button>
      </div>
    </div>
  );
};
export default Nitsmun;
