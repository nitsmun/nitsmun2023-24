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
            <img src={props.src} className={styles.letterPhoto} alt={styles.secGen} />
            <div>
              <p className={styles.peraHeading}>
                Dear Delegates, respected Faculty Advisors, and the Secretariat
              </p>
              <p className={`${styles.messagefrmFic} ${styles.p}`}>
                {props.name === "Maruf Padaya" ? (
                  <>
                    It is of utmost pride and honour to be the Secretary General of this
                    esteemed Secretariat for this year and more prestigious to host you as
                    our keen readers.
                    <br />
                    <br />
                    NITSMUN, since its inception in 2014 has always believed in striving
                    for peace with ink and voice. With great support from our concerned
                    members, we have hosted numerous conferences, multiple events and
                    workshops, hosting 1000+ delegates and a family of 10k+ members on our
                    Social Media handles.
                    <br />
                    <br />
                    This upcoming year, we are very keen to host numerous events and
                    workshops to boost and strengthen the voice of our flying delegates
                    who are ready to roar on the matters of global concern, and more
                    importantly solve for forthcoming generations. Notable episodes
                    include the first inaugural Youth Parliament in November (2023), the
                    11th edition of of our flagship Annual Conference in February (2024),
                    and a dedicated ‘diplomacy’ week comprising of various events such as
                    debates, extempore, quiz, G20-simulation and many more to comprehend
                    geopolitical matters and develop the instinct to solve them with
                    dialogues.
                    <br />
                    <br />
                    On behalf of my Secretariat, I welcome you all on this journey of
                    youthful explorations, solving critical concerns, and more importantly
                    voicing your zeal for peace. Ending my envelope with a notion: it
                    takes billions of pounds to stock the weapons, millions of lives to
                    victimise in wars, thousands of soldiers to fight a battle, but only
                    one pen to hunch the harmony!
                    <br />
                    <br />
                  </>
                ) : (
                  <>
                    Since its inception NITSMUN has been working hard, trying to build a
                    MUNning environment in the college. I personally feel that the efforts
                    they put in in each little thing they do is commendable. It has been
                    quite some time since I have been connected to this club, and this
                    club has never disappointed me. I would love to see this club
                    flourishing more and more in the coming years. This time they are
                    planning to hold the three days annual conference in an even grander
                    manner, with three very exciting and out of the box committees. To be
                    held under the banner of Incandescence 2023, NITSMUN is all ready to
                    welcome all MUNners and non-MUNners from all around the country.
                    <br />
                    <br />
                    To everyone reading this, I would ask you to go through this website
                    so that you learn more about this club and about MUNs in general.
                    <br />
                    <br />
                  </>
                )}
              </p>
            </div>
          </div>
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
