import styles from "./Faq.module.scss";
import Card from "./Card/Card";
const Faq = () => {
  const data1 = [
    {
      sl: 1,
      question: `What is NITSMUN?`,
      answer: `NITSMUN is a club in NIT Silchar, which from its inception has been trying to develop a culture of MUNs in the campus`,
    },
    {
      sl: 2,
      question: `What is Model United Nations?`,
      answer: `Model United Nations is an academic simulation of the United Nations that aims to educate and encourage participants to discuss about major issues concerning the world`,
    },
    {
      sl: 3,
      question: `When does NITSMUN organises conferences?`,
      answer: `The annual conference will be held during the time of incandescence`,
    },
    {
      sl: 4,
      question: `What is coming up next?`,
      answer: `The annual conference of NITSMUN`,
    },
  ];
  const data2 = [
    {
      sl: 1,
      question: `Are outside people allowed in NITSMUN conference?`,
      answer: `Eligible students will be able to participate with a nominal fee`,
    },
    {
      sl: 2,
      question: `Who can participate in NITSMUN 2024 ?`,
      answer: `Individual participation from Engineering students, MBA students and Undergraduates are allowed`,
    },
    {
      sl: 3,
      question: `Will the conference be held online or offline?`,
      answer: `Offline`,
    },
    {
      sl: 4,
      question: `What is the dress code for NITSMUN 2024?`,
      answer: `Western Formals`,
    },
  ];
  return (
    <div className={styles.mainCont}>
      <div className={styles.heading}>
        <div className={styles.line}>.</div>
        <h1 className={styles.text}>FAQ</h1>
        <div className={styles.line}>.</div>
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
