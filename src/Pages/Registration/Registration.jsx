/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import { useState, useMemo, useEffect, useContext } from "react";
import FileBase64 from "react-file-base64";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { toast } from "sonner";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Registration.module.scss";
import { UserContext } from "../../Context/ContextProv";
import { fetchProfile } from "../../ReactQuery/Fetchers/Profile";
import Footer from "../../Components/Footer/Footer";

const FieldName = (props) => {
  return (
    <div className={styles.fieldName} style={{ width: `${props.width}` }}>
      <h1 className={styles.name}>{props.name}</h1>
      <h1
        className={styles.compulsory}
        style={{ visibility: `${props.compulsory === true ? "visible" : "hidden"}` }}
      >
        *
      </h1>
    </div>
  );
};

const Registration = () => {
  const { role, isLoggedIn } = useContext(UserContext);
  const [submitting, setSubmitting] = useState(false);

  const isStudentTrue = useMemo(() => {
    return Boolean(role === "client" && isLoggedIn);
  }, [role, isLoggedIn]);

  const profileKey = useMemo(() => ["profile"], []);
  const { data, error, isLoading } = useQuery(profileKey, fetchProfile, {
    enabled: isStudentTrue,
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Registration form | NITSMUN";
    if (!isStudentTrue) {
      navigate("/");
    }
    if (data?.isVerified === false) {
      navigate("/dashboard");
      toast.error("You need to verify your email first");
    }
  }, [isStudentTrue, navigate, data?.isVerified]);

  const eventName = "Annual Conference 2024";

  const [payment, setPayment] = useState("");
  const [college, setCollege] = useState("");
  const [previousMunExperience, setPreviousMunExperience] = useState("");
  const [committeePreference, setCommitteePreference] = useState([]);
  const [portfolioPreference, setPortfolioPreference] = useState([]);
  // console.log(portfolioPreference)
  const handleCommiteeSelection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCommitteePreference((prevCOmt) => [...prevCOmt, value]);
    } else {
      setCommitteePreference((prevComt) => prevComt.filter((comt) => comt !== value));
      if (value === "IB") {
        setIbPortfolio([]);
      } else if (value === "UNHRC") {
        setUnhrcPortfolio([]);
      } else if (value === "IPC") {
        setIpcPortfolio([]);
      } else if (value === "Mahabharat") {
        setMahaPortfolio([]);
      }
    }
  };

  const ibOptions = [
    "Prime minister",
    "Amit Shah",
    "Director of IB",
    "Director General, Central Reserve Police Force",
    "Director General, Central Industrial Security Force",
    "Director General, National Security Guard",
    "Director General, National Investigation Agency",
    "Secretary , RAW (Ravi Sinha, IPS)",
    "DGP UP Police",
    "ADGP UP Police",
    "Cabinet Secretary (Rajiv Gauba, IAS)",
    "Home Secretary (Ajay Kumar Bhalla, IAS)",
    "Foreign secretary",
    "Defence Secretary",
    "National Security Advisor",
    "National Cyber Security Coordinator",
    "Chairman NTRO",
    "Head of NIA",
    "DNSA",
    "Himanta Biswa Sarma",
    "Pramod Sawant",
    "Bhupendra Patel",
    "Manik Saha",
    "Pushkar Singh Dhami",
    "Yogi Adityanath",
  ];

  const unhrcOptions = [
    "Afghanistan",
    "Algeria",
    "Argentina",
    "Australia",
    "Bangaldesh",
    "Belgium",
    "Bolivia",
    "Brazil",
    "Burkina Faso",
    "Canada",
    "Chile",
    "China",
    "Democratic Republic of Congo",
    "Denmark",
    "France",
    "Germany",
    "Greece",
    "India",
    "Iran",
    "Iraq",
    "Israel",
    "Italy",
    "Japan",
    "Jordan",
    "Kuwait",
    "Libya",
    "Malaysia",
    "Mexico",
    "Morocco",
    "Netherlands",
    "Nigeria",
    "Pakistan",
    "Palestine",
    "Poland",
    "Qatar",
    "Russian Federation",
    "Saudi Arabia",
    "Senegal",
    "South Africa",
    "South Korea",
    "Spain",
    "Srilanka",
    "Sudan",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States Of America",
    "Uruguay",
    "Vietnam",
  ];

  const ipcOptions = [
    "Al-Jazeera",
    "Australian Broadcasting Corporation",
    "BBC",
    "DAWN",
    "Reuters",
    "The Guardian",
    "The Hindu",
    "The Independent",
    "The Indian Express",
    "The Spectator",
    "The Washington Post",
    "Xinhua News Agency",
  ];

  const mahaOptions = [
    "Abhimanyu",
    "Arjuna",
    "Bhima",
    "Chekitana",
    "Dhrishtadyumna",
    "Dhrishtaketu",
    "Draupadi",
    "Drupada",
    "Ghatotkacha",
    "Iravan",
    "Kaikeyi",
    "Krishna",
    "Kunti",
    "Madri",
    "Malaydhwaja",
    "Nakula",
    "Sahadeva",
    "Satyaki",
    "Shalya",
    "Shankha",
    "Shikhandi",
    "Sreniman",
    "Uttara",
    "Virata",
    "Yudhishthira",
    "Alambusha",
    "Ashwatthama",
    "Bahlika",
    "Bhagadatta",
    "Bhishma",
    "Brihadbala",
    "Dhritarashtra",
    "Dronacharya",
    "Durmukha",
    "Duryodhana",
    "Dushasana",
    "Dushkarna",
    "Gandhari",
    "Jarasandha",
    "Jayadratha",
    "Karna",
    "Kripacharya",
    "Laxman Kumara",
    "Shakuni",
    "Shishupala",
    "Sudakshina",
    "Susharma",
    "Uluka",
    "Vikarna",
    "Vrishaketu",
    "Vrishasena",
    "Shalya",
    "Vidur",
    "Yuyutsu",
  ];

  const [ibPortfolio, setIbPortfolio] = useState([]);
  const [unhrcPortfolio, setUnhrcPortfolio] = useState([]);
  const [mahaPortfolio, setMahaPortfolio] = useState([]);
  const [ipcPortfolio, setIpcPortfolio] = useState([]);

  useEffect(() => {
    setPortfolioPreference([
      ...ibPortfolio,
      ...unhrcPortfolio,
      ...mahaPortfolio,
      ...ipcPortfolio,
    ]);
  }, [ibPortfolio, unhrcPortfolio, mahaPortfolio, ipcPortfolio]);

  const handleSelect = (event) => {
    const { value } = event.target;
    if (ibPortfolio.length >= 3) {
      setIbPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setIbPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleSelectIpc = (event) => {
    const { value } = event.target;
    if (ipcPortfolio.length >= 3) {
      setIpcPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setIpcPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleSelectUnhrc = (event) => {
    const { value } = event.target;
    if (unhrcPortfolio.length >= 3) {
      setUnhrcPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setUnhrcPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleSelectMaha = (event) => {
    const { value } = event.target;
    if (mahaPortfolio.length >= 3) {
      setMahaPortfolio((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : prevSelected
      );
      return;
    }
    setMahaPortfolio((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  useEffect(() => {
    if (committeePreference?.length > 3) {
      toast("Please select 1-3 committees");
      setCommitteePreference([]);
      setIbPortfolio([]);
      setUnhrcPortfolio([]);
      setIpcPortfolio([]);
      setMahaPortfolio([]);
      setPortfolioPreference([]);
    }

    if (portfolioPreference?.length > 9) {
      toast("You can select maximum of 9 Portfolios");
      setPortfolioPreference([]);
      setIbPortfolio([]);
      setUnhrcPortfolio([]);
      setIpcPortfolio([]);
      setMahaPortfolio([]);
    }
  }, [committeePreference, portfolioPreference]);

  const handleImgChange = (base64) => {
    setPayment(base64);
  };

  const ifNitsguy = {
    eventName,
    payment,
    previousMunExperience,
    committeePreference,
    portfolioPreference,
  };

  const otherGuy = {
    eventName,
    payment,
    previousMunExperience,
    committeePreference,
    portfolioPreference,
    college,
  };

  const payload =
    data?.isStudentOfNITS === true
      ? ifNitsguy
      : data?.isStudentOfNITS === false
      ? otherGuy
      : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // console.log(payload)
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_API}/reg/yp`, payload, {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.message === "Event registration completed") {
            toast("Event registration completed");
            window.location.href = "/dashboard";
          }
        });
    } catch (ee) {
      if (ee.response) {
        switch (ee.response.data.error) {
          case "Please fill all required fields":
            toast("Please fill all required fields");
            break;
          case "invalid committee selection":
            toast("invalid committee selection");
            break;
          case "invalid portfolio selection":
            toast("invalid portfolio selection");
            break;
          case "Unauthorized":
            toast("Unauthorized");
            break;
          case "User not found":
            toast("User not found");
            break;
          case "Signup with this email for the event already exists":
            toast("Signup with this email for the event already exists");
            break;
          case "You need to verify your email first":
            toast("You need to verify your email first");
            break;
          case "Admins and SuperAdmins are not allowed to register for an event":
            toast("Admins and SuperAdmins are not allowed to register for an event");
            break;
          case "Something went wrong on the server side":
            toast("Something went wrong on the server side");
            break;
          default:
            toast("Something went wrong");
            break;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  const isButtonEnabled = useMemo(() => {
    if (data?.isStudentOfNITS === true) {
      return Boolean(
        payment &&
          previousMunExperience &&
          portfolioPreference?.length > 0 &&
          committeePreference?.length > 0
      );
    }
    return Boolean(
      payment &&
        previousMunExperience &&
        college &&
        portfolioPreference?.length > 0 &&
        committeePreference?.length > 0
    );
  }, [
    payment,
    previousMunExperience,
    college,
    portfolioPreference,
    committeePreference,
    data?.isStudentOfNITS,
  ]);

  if (error) {
    return <div>Something went wrong!</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // console.log(committeePreference)
  // console.log(portfolioPreference)
  return (
    <div>
      <Navbar page="REGISTRATION" />
      <h1 className={styles.mainHeading}>REGISTER NOW</h1>
      <div className={styles.regCont}>
        <div className={styles.heading}>
          <div className={styles.textCont}>
            <h1 className={styles.title}>NITSMUN 2024 Online Registration Form</h1>
            <h4 className={styles.tagline}>
              Please fill in the form below. We&apos;ll contact you as soon as possible.
            </h4>
          </div>
          <div className={styles.logoCont}>
            <img
              alt="logo loading..."
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702639587/nitsmun/nitsmun_logo_2_np5mtk.png"
              className={styles.logo}
            />
          </div>
        </div>
        <form className={styles.form}>
          <div className={`${styles.partitions} ${styles.prevExp}`}>
            <FieldName compulsory name="Previous MUN experiences" />
            <textarea
              value={previousMunExperience}
              onChange={(e) => {
                setPreviousMunExperience(e.target.value);
              }}
              className={styles.inputBox}
            ></textarea>
          </div>

          {data?.isStudentOfNITS === false && (
            <div className={`${styles.partitions} ${styles.prevExp}`}>
              <FieldName compulsory name="Your College Name" />
              <textarea
                value={college}
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
                className={styles.inputBox}
              ></textarea>
            </div>
          )}

          <div className={`${styles.partitions} ${styles.committee}`}>
            {/* Committee Preferences */}
            <FieldName compulsory name="Committee Preferences" />

            <div className={styles.partitionChild}>
              <h6 className={styles.disclaimer}>
                Chose any three committees in order of preference :
              </h6>

              <div className={styles.inputCont}>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Choice 1: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="UNHRC"
                      checked={committeePreference.includes("UNHRC")}
                      onChange={handleCommiteeSelection}
                    />
                    UNHRC
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Choice 2: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="IB"
                      checked={committeePreference.includes("IB")}
                      onChange={handleCommiteeSelection}
                    />
                    IB
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Choice 3: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="Mahabharat"
                      checked={committeePreference.includes("Mahabharat")}
                      onChange={handleCommiteeSelection}
                    />
                    Hastinapur Special Council
                  </label>
                </div>

                <div className={styles.field}>
                  <h2 className={styles.h2}>Choice 4: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="IPC"
                      checked={committeePreference.includes("IPC")}
                      onChange={handleCommiteeSelection}
                    />
                    IPC
                  </label>
                </div>
              </div>

              {/* Portfoilio preference */}
              <FieldName compulsory name="Portfolio Preferences" />

              {/* <div className={styles.inputCont}>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 1: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 1"
                      checked={portfolioPreference.includes("Portfolio 1")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 1
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 2: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 2"
                      checked={portfolioPreference.includes("Portfolio 2")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 2
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 3: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 3"
                      checked={portfolioPreference.includes("Portfolio 3")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 3
                  </label>
                </div>

                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 4: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="portfolio"
                      value="Portfolio 4"
                      checked={portfolioPreference.includes("Portfolio 4")}
                      onChange={handlePortfolioSelection}
                    />
                    Portfolio 4
                  </label>
                </div>
              </div> */}

              {/* IB PORTFOLIO */}
              <div id={styles.flex}>
                {committeePreference.includes("IB") && (
                  <main id={styles.maxoptionwidth}>
                    <p id={styles.portfoliotitle}>
                      Portfolio list for{" "}
                      <span style={{ fontWeight: 900, fontFamily: "Inter" }}>IB</span> :
                      (you can select max 3 portfolios for each Committee){" "}
                    </p>

                    {window.innerWidth > 768 && (
                      <select
                        multiple
                        onChange={handleSelect}
                        value={ibPortfolio}
                        // size={ibOptions.length}
                      >
                        {ibOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {window.innerWidth < 768 && (
                      <main id={styles.heightfixed}>
                        <label multiple onClick={handleSelect} value={ibPortfolio}>
                          {ibOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </label>
                      </main>
                    )}

                    <div>
                      <h3>
                        Selected Portfolios for{" "}
                        <span style={{ fontWeight: 900, fontFamily: "Inter" }}>IB</span>:
                      </h3>
                      <ul>
                        {ibPortfolio.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </main>
                )}

                {/* UNHRC PORTFOLIO */}
                {committeePreference.includes("UNHRC") && (
                  <main id={styles.maxoptionwidth}>
                    <p>
                      Portfolio list for{" "}
                      <span style={{ fontWeight: 900, fontFamily: "Inter" }}>UNHRC</span>{" "}
                      : (you can select max 3 portfolios for each Committee){" "}
                    </p>
                    {window.innerWidth > 768 && (
                      <select
                        multiple
                        onChange={handleSelectUnhrc}
                        value={unhrcPortfolio}
                      >
                        {unhrcOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {window.innerWidth < 768 && (
                      <main id={styles.heightfixed}>
                        <label
                          multiple
                          onClick={handleSelectUnhrc}
                          value={unhrcPortfolio}
                          className={styles.limitedheight}
                        >
                          {unhrcOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </label>
                      </main>
                    )}

                    <div>
                      <h3>
                        Selected Portfolios for{" "}
                        <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                          UNHRC
                        </span>
                        :
                      </h3>
                      <ul>
                        {unhrcPortfolio.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </main>
                )}

                {/* IPC PORTFOLIO */}
                {committeePreference.includes("IPC") && (
                  <main id={styles.maxoptionwidth}>
                    <p>
                      Portfolio list for{" "}
                      <span style={{ fontWeight: 900, fontFamily: "Inter" }}>IPC</span> :
                      (you can select max 3 portfolios for each Committee)
                    </p>
                    {window.innerWidth > 768 && (
                      <select
                        multiple
                        onChange={handleSelectIpc}
                        value={ipcPortfolio}
                        // size={ipcOptions.length}
                      >
                        {ipcOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {window.innerWidth < 768 && (
                      <main id={styles.heightfixed}>
                        <label multiple onClick={handleSelectIpc} value={ipcPortfolio}>
                          {ipcOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </label>
                      </main>
                    )}

                    <div>
                      <h3>
                        Selected Portfolios for{" "}
                        <span style={{ fontWeight: 900, fontFamily: "Inter" }}>IPC</span>:
                      </h3>
                      <ul>
                        {ipcPortfolio.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </main>
                )}

                {/* MAHABhARAT PORTFOLIO */}
                {committeePreference.includes("Mahabharat") && (
                  <main id={styles.maxoptionwidth}>
                    <p>
                      Portfolio list for{" "}
                      <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                        Hastinapur Special Council
                      </span>{" "}
                      : (you can select max 3 portfolios for each Committee)
                    </p>
                    {window.innerWidth > 768 && (
                      <select
                        multiple
                        onChange={handleSelectMaha}
                        value={mahaPortfolio}
                        // size={mahaOptions.length}
                      >
                        {mahaOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {window.innerWidth < 768 && (
                      <main id={styles.heightfixed}>
                        <label
                          multiple
                          onClick={handleSelectMaha}
                          value={mahaPortfolio}
                          // size={mahaOptions.length}
                        >
                          {mahaOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </label>
                      </main>
                    )}

                    <div>
                      <h3>
                        Selected Portfolios for{" "}
                        <span style={{ fontWeight: 900, fontFamily: "Inter" }}>
                          Hastinapur Special Council
                        </span>{" "}
                        :{" "}
                      </h3>
                      <ul>
                        {mahaPortfolio.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </main>
                )}
              </div>

              <div className={styles.payment}>
                <FieldName compulsory name="Payment" />
                <div className={styles.payCont}>
                  <p className={styles.p}>
                    To participate in the NITSMUN Annual Conference 2024, a registration
                    fee of Rs 349 is to be paid by every delegate.
                  </p>
                  <div className={styles.payInfoMaster}>
                    <div className={styles.paymentInfoCont}>
                      <div className={styles.paymentInfo}>
                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>
                            Account Number:
                          </span>
                          3263 01 0000 4144
                        </h1>

                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>IFSC:</span>
                          BARB0MENGRO
                        </h1>
                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>UPI ID:</span>
                          marufpadaya@barodampay , marufpadaya786@okaxis
                        </h1>
                        {/* <span
                          className={`${styles.h1} ${styles.bolded}`}
                          style={{ color: "#000000" }}
                        >
                          Scan QR code to pay :
                        </span> */}
                      </div>

                      <div className={styles.paymentInfo}>
                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>
                            Account Holder&apos;s Name:
                          </span>
                          Maruf A Kadar Padaya
                        </h1>

                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>Or,</span>
                          Scan the QR code given below :
                        </h1>
                      </div>

                      <div id={styles.qrcodehldr}>
                        <img
                          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1706533667/WhatsApp_Image_2024-01-29_at_18.25.22_oaxkqa.jpg"
                          alt=""
                        />
                      </div>
                      <div className={styles.screenshot}>
                        <div>
                          Insert screenshot of the payment (size should be less than
                          500KB) * :
                        </div>
                        <FileBase64
                          multiple={false}
                          onDone={({ base64, file }) => {
                            if (
                              (file.type === "image/png" ||
                                file.type === "image/jpeg" ||
                                file.type === "image/jpg" ||
                                file.type === "image/webp" ||
                                file.type === "image/avif") &&
                              file.size <= 500 * 1024
                            ) {
                              handleImgChange(base64);
                            } else {
                              toast("Invalid file type or image is greater than 300KB");
                              setPayment("");
                            }
                          }}
                        />
                      </div>
                    </div>
                    {/* <div>
                      <img
                        alt="logo loading..."
                        src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702679499/Rickrolling_QR_code_1_bic0zd.png"
                      />
                    </div> */}
                  </div>

                  {/* submit button  */}
                  <div className={styles.subCont}>
                    <input
                      type="submit"
                      value={submitting ? "Submitting..." : "Submit"}
                      disabled={submitting || !isButtonEnabled}
                      style={{
                        cursor:
                          submitting || !isButtonEnabled ? "not-allowed" : "pointer",
                        opacity: submitting || !isButtonEnabled ? "0.5" : "1",
                      }}
                      onClick={handleSubmit}
                      className={styles.submitBtn}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactInfoCont} id={styles.columnflex}>
            <h2 className={styles.bolded}>For any general queries contact:</h2>
            <h2 className={styles.normal}>1. Ronak Jain (+91 84028 22820)</h2>
            <h2 className={styles.normal}>2. Aditi (+91 84865 00973)</h2>
          </div>
          <div className={styles.contactInfoCont} id={styles.columnflex}>
            <h2 className={styles.bolded}>For any form related queries contact:</h2>
            <h2 className={styles.normal}>1. Aditya (+91 8210610167)</h2>
            <h2 className={styles.normal}>2. Ankit (+91 88129 59563)</h2>
            <h2 className={styles.normal}>3. Dorothy (+91 81330 72305)</h2>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Registration;
