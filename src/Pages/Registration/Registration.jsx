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
  console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStudentTrue) {
      navigate("/");
    }
  }, [isStudentTrue, navigate]);

  const eventName = "annualConference2024";

  const [payment, setPayment] = useState("");
  const [college, setCollege] = useState("");
  const [previousMunExperience, setPreviousMunExperience] = useState("");
  const [committeePreference, setCommitteePreference] = useState([]);
  const [portfolioPreference, setPortfolioPreference] = useState([]);

  const handleCommiteeSelection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCommitteePreference((prevCOmt) => [...prevCOmt, value]);
    } else {
      setCommitteePreference((prevComt) => prevComt.filter((comt) => comt !== value));
    }
  };

  const handlePortfolioSelection = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setPortfolioPreference((prevPOrt) => [...prevPOrt, value]);
    } else {
      setPortfolioPreference((prevPort) => prevPort.filter((port) => port !== value));
    }
  };

  useEffect(() => {
    if (committeePreference?.length > 3) {
      toast("Please select 1-3 committees");
      setCommitteePreference([]);
    }

    if (portfolioPreference?.length > 3) {
      toast("Please select 1-3 portfolios");
      setPortfolioPreference([]);
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
          portfolioPreference?.length > 1 &&
          portfolioPreference?.length < 4 &&
          committeePreference?.length > 1 &&
          committeePreference?.length < 4
      );
    }
    return Boolean(
      payment &&
        previousMunExperience &&
        college &&
        portfolioPreference?.length > 1 &&
        portfolioPreference?.length < 4 &&
        committeePreference?.length > 1 &&
        committeePreference?.length < 4
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

  return (
    <div>
      <Navbar page="REGISTRATION" />
      <h1 className={styles.mainHeading}>REGISTER NOW</h1>
      <div className={styles.regCont}>
        <div className={styles.heading}>
          <div className={styles.textCont}>
            <h1 className={styles.title}>Youth Parliament Online Registration Form</h1>
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
            <FieldName compulsory name="Previous MUN experiences (if any)" />
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
                (Due to limited capacity, delegates are informed that the committee
                preference are not always met and are not guaranteed.)
              </h6>
              <ul className={styles.prefTags}>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <div className={styles.inputCont}>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 1: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="Committee 1"
                      checked={committeePreference.includes("Committee 1")}
                      onChange={handleCommiteeSelection}
                    />
                    Committee 1
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 2: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="Committee 2"
                      checked={committeePreference.includes("Committee 2")}
                      onChange={handleCommiteeSelection}
                    />
                    Committee 2
                  </label>
                </div>
                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 3: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="Committee 3"
                      checked={committeePreference.includes("Committee 3")}
                      onChange={handleCommiteeSelection}
                    />
                    Committee 3
                  </label>
                </div>

                <div className={styles.field}>
                  <h2 className={styles.h2}>Preference 4: </h2>
                  <label className="radioinpt">
                    <input
                      type="checkbox"
                      name="committee"
                      value="Committee 4"
                      checked={committeePreference.includes("Committee 4")}
                      onChange={handleCommiteeSelection}
                    />
                    Committee 4
                  </label>
                </div>
              </div>

              {/* Portfoilio preference */}
              <FieldName compulsory name="Portfolio Preferences" />
              <h6 className={styles.disclaimer}>
                (Due to limited capacity, delegates are informed that the committee
                preference are not always met and are not guaranteed.)
              </h6>
              <ul className={styles.prefTags}>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <div className={styles.inputCont}>
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
              </div>

              <div className={styles.payment}>
                <FieldName compulsory name="Payment" />
                <div className={styles.payCont}>
                  <p className={styles.p}>
                    To participate in the NITS- MUN Youth Parliament 2023, a registration
                    fee of Rs 349 is needed to be paid by every delegate which will
                    include Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente
                  </p>
                  <div className={styles.payInfoMaster}>
                    <div className={styles.paymentInfoCont}>
                      <div className={styles.paymentInfo}>
                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>
                            UPI No.:
                          </span>
                          12345 12345
                        </h1>
                        <h1 className={styles.h1}>
                          <span className={`${styles.h1} ${styles.bolded}`}>UPI ID:</span>
                          abcde-12345
                        </h1>
                        <span
                          className={`${styles.h1} ${styles.bolded}`}
                          style={{ color: "#000000" }}
                        >
                          Scan QR code to pay :
                        </span>
                      </div>
                      <div className={styles.screenshot}>
                        <div>Insert screenshot of the payment * :</div>
                        <FileBase64
                          multiple={false}
                          onDone={({ base64, file }) => {
                            if (
                              (file.type === "image/png" ||
                                file.type === "image/jpeg" ||
                                file.type === "image/jpg" ||
                                file.type === "image/webp" ||
                                file.type === "image/avif") &&
                              file.size <= 300 * 1024
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
                    <div>
                      <img
                        alt="logo loading..."
                        src="https://res.cloudinary.com/dhry5xscm/image/upload/v1702679499/Rickrolling_QR_code_1_bic0zd.png"
                      />
                    </div>
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
          <div className={styles.contactInfoCont}>
            <h2 className={styles.bolded}>For any queries contact:</h2>
            <h2 className={styles.normal}>1. Lorem Ipsum dolor (69420-69420)</h2>
            <h2 className={styles.normal}>2. Lorem Ipsum dolor (42069-420-69)</h2>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
