import styles from "./Faq.module.scss";
import Card from "./Card/Card";
const Faq = (props) => {
  const data1 = [
    {
      sl: 1,
      question: `What is NITSMUN?`,
      answer: `NITSMUN is a club in NIT Silchar, which from its inception has been trying to develop a culture of MUNs in the campus.`,
    },
    {
      sl: 2,
      question: `What is Model United Nations?`,
      answer: `Model United Nations is an academic simulation of the United Nations that aims to educate and encourage participants to discuss about major issues concerning the world.`,
    },
    {
      sl: 3,
      question: `When does NITSMUN organises conferences?`,
      answer: `The annual conference will be held during the time of Incandescence`,
    },
    {
      sl: 4,
      question: `What is coming up next?`,
      answer: `The annual conference of NITSMUN and Mr and Mrs Diplomat.`,
    },
  ];
  const data2 = [
    {
      sl: 1,
      question: `Can individuals not belonging to NITS participate in the conference?`,
      answer: `Yes, the conference is open to everyone, irrespective of their institute.  `,
    },
    {
      sl: 2,
      question: `Who can participate in the NITSMUN Annual Conference 2024?`,
      answer: `Anyone from any institute with an interest in MUNs can take part`,
    },
    {
      sl: 3,
      question: `Will the conference be held online or offline?`,
      answer: `Offline`,
    },
    {
      sl: 4,
      question: `What will be the dress code for the annual conference?`,
      answer: ` Information regarding the dress code will be shared prior to the conference.`,
    },
  ];
  return (
    <div className={styles.mainCont}>
      <div className={styles.heading}>
        <div className={styles.line} style={{ backgroundColor: `${props.color}` }}>
          .
        </div>
        <h1 className={styles.text} style={{ color: `${props.color}` }}>
          FAQ
        </h1>
        <div className={styles.line} style={{ backgroundColor: `${props.color}` }}>
          .
        </div>
      </div>
      <div className={styles.cardsCont}>
        <div className={styles.col}>
          {data1.map((item) => (
            <Card key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className={styles.col}>
          {data2.map((item) => (
            <Card key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
