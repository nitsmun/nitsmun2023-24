/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { fetchProfile } from "../../ReactQuery/Fetchers/Profile";
import { UserContext } from "../../Context/ContextProv";
import styles from "./Dashboard.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { fetchAllStudentRegistrations } from "../../ReactQuery/Fetchers/StudentRegisteredEvent";

const WidePopup = (props) => {
  // console.log(props?.events)
  if (props.name === "events registered") {
    return (
      <div className={styles.widePop}>
        {props.events?.length === 0 ? (
          <main>
            <p id={styles.boldpp}>No events registered.</p>
            <p id={styles.reallysmall}>
              (click again on Events Registered button to close popup)
            </p>
          </main>
        ) : (
          <main>
            {/* <p id={styles.boldpp}>Annual Conference 2024</p>
            <p id={styles.reallysmall}>
              (click again on registered events button to close popup)
            </p> */}
            {/* <p id={styles.boldpp}>This section is under development.</p>
            <p id={styles.reallysmall}>
              (click again on events registered button to close popup)
            </p> */}
            {props.events?.map((item) => {
              return (
                <main key={item?._id}>
                  <p id={styles.boldpp}>{item?.eventName}</p>
                  <p id={styles.reallysmall}>
                    (click again on Events Registered button to close popup)
                  </p>
                </main>
              );
            })}
          </main>
        )}
      </div>
    );
  }

  if (props.name === "events information") {
    return (
      <div className={styles.widePop}>
        {props.infos === null ? (
          <main>
            <p id={styles.boldpp}>To be announced..stay tuned </p>
            <p id={styles.reallysmall}>
              (click again on Upcoming Events button to close popup)
            </p>
          </main>
        ) : (
          props.infos?.map((item) => <p id={styles.boldpp}>{item}</p>)
        )}
      </div>
    );
  }

  return null;
};

const Card = (props) => {
  const [choice, setChoice] = useState(null);
  const [option, setOption] = useState(false);
  const wideView = (i, j, setoption, setchoice, Option, Choice) => {
    if (Option === false) {
      setoption(i);
    } else {
      setoption(false);
    }
    if (Choice) {
      setchoice(j);
    } else {
      setChoice(null);
    }
  };
  const { role } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "superadmin") {
      navigate("/superadmin");
    }
  }, [role, navigate]);

  const handleSignout = (e) => {
    e.preventDefault();
    Cookies.remove("authToken");
    navigate("/");
    window.location.reload();
  };

  const handleDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  const [sending, setSending] = useState(false);
  const [linkReceived, setLinkReceived] = useState(false);
  const [verificationLink, setVerificationLink] = useState("");
  const handleSendVerificationLink = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios
        .post(
          `${import.meta.env.VITE_REACT_APP_API}/sendlink`,
          {},
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.message === "Verification link sent successfully") {
            setLinkReceived(true);
            setVerificationLink(res.data?.verifyEmailLink);
            toast.success("Verification link provided", {
              duration: 15000,
            });

            // alert(
            //   `Link is pr`
            // );
          }
        });
    } catch (ee) {
      if (ee.response) {
        switch (ee.response.data.error) {
          case "Server Error":
            toast("Server Error");
            break;
          case "Unauthorized":
            toast("Unauthorized");
            break;
          case "User not found":
            toast("User not found");
            break;
          case "Email already verified":
            toast("Email already verified");
            break;
          default:
            toast("Something went wrong");
            console.error(ee);
            break;
        }

        switch (ee.response.data.message) {
          case "Either token or tokenExpires at is missing":
            toast("Either token or tokenExpires at is missing");
            break;
          default:
            toast("Something went wrong");
            break;
        }
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {option === false ? null : (
        <WidePopup name={option} infos={choice} events={props.events} />
      )}
      {props.isVerified === true ? (
        <div className={styles.cardWrap}>
          {/* <h1 className={styles.h1}>USER DASHBOARD</h1> */}
          <div className={styles.details}>
            <div className={styles.personalDetails}>
              <div className={styles.userDetails}>
                <div className={styles.person}>
                  <div className={styles.photoParent}>
                    <img className={styles.img} alt="" src={props.photo} />
                  </div>
                  <div className={styles.bio}>
                    <div className={styles.field} id={styles.topmargintoname}>
                      <h1 className={styles.h1}>Name</h1>
                      <h1 className={styles.desc}>{props.name}</h1>
                    </div>

                    {props.isStudentOfNITS === true ? (
                      <>
                        <div className={styles.field} id={styles.topmargintoname}>
                          <h1 className={styles.h1}>Scholar ID</h1>
                          <h1 className={styles.desc}>{props.phone}</h1>
                        </div>
                        <div className={styles.field} id={styles.topmargintoname}>
                          <h1 className={styles.h1}>Branch</h1>
                          <h1 className={styles.desc}>{props.branch}</h1>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className={styles.contactSec}>
                  <div className={styles.personalContact}>
                    {/* <h1 className={styles.heading}>Contact Details</h1> */}
                    <div className={styles.content}>
                      <div className={styles.field} id={styles.topmargintoname}>
                        <h1 className={styles.h1}>Phone Number</h1>
                        <a style={{ color: "black" }} href={`tel:${props.phone}`}>
                          <h1 className={styles.desc}>{props.phone}</h1>
                        </a>
                      </div>
                      <div className={styles.field} id={styles.topmargintoname}>
                        <h1 className={styles.h1}>Email</h1>
                        <a style={{ color: "black" }} href={`mailto:${props.email}`}>
                          {" "}
                          <h1 className={styles.desc}>{props.email}</h1>
                        </a>
                      </div>
                    </div>
                  </div>
                  {props.isStudentOfNITS === true ? (
                    <div className={styles.instContact}></div>
                  ) : null}
                </div>
              </div>

              <div className={styles.eventCol}>
                <div className={styles.parent}>
                  <ul className={styles.eventsRegistered}>
                    <h3 style={{ textDecoration: "underline" }}>Registered Events:</h3>
                    {props.events?.length === 0 ? (
                      <h1 className={styles.h1}>No events registered yet</h1>
                    ) : (
                      props.events?.map((item) => {
                        return (
                          <ul>
                            <li>
                              <p id={styles.boldppp}>{item?.eventName}</p>
                            </li>
                          </ul>
                        );
                      })
                    )}
                  </ul>
                </div>

                <div className={styles.parent}>
                  <div className={styles.eventsUpcoming}>
                    {props.eventsInfo === null ? (
                      <h1 className={styles.h1}>Upcoming event to be announced...</h1>
                    ) : (
                      props.eventsInfo?.map((item) => (
                        <li>
                          <h1>{item.name}</h1>
                          <div className={styles.detailsCont}>
                            <Link to={props.eventsTo} className={styles.knowMore}>
                              Know more
                            </Link>
                            <Link to={props.regTo} className={styles.regNow}>
                              Register Now
                            </Link>
                          </div>
                        </li>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <div className={styles.col}>
              {props?.isVerified ? (
                <button
                  onClick={handleDashboard}
                  style={{ cursor: "pointer" }}
                  className={styles.btn}
                >
                  <div id={styles.flexbetn}>
                    <img
                      alt=""
                      src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706499/nitsmun/dashboard_yynv9s.svg"
                    />
                    <label
                      id={styles.labessize}
                      style={{ cursor: "pointer" }}
                      htmlFor="dashboard"
                    >
                      Dashboard
                    </label>
                  </div>
                </button>
              ) : (
                <button
                  style={{
                    cursor: sending ? "not-allowed" : "pointer",
                    opacity: sending ? "0.5" : "1",
                  }}
                  disabled={sending}
                  className={styles.btn}
                  onClick={handleSendVerificationLink}
                >
                  {sending ? "Sending..." : "Send Verification link"}
                </button>
              )}

              <button
                onClick={() =>
                  wideView(
                    "events registered",
                    null,
                    setOption,
                    setChoice,
                    option,
                    choice
                  )
                }
                className={styles.btn}
              >
                <div id={styles.flexbetn}>
                  <img
                    alt=""
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706500/nitsmun/tasks-1_tlxmil.svg"
                  />
                  <label
                    id={styles.labessize}
                    style={{ cursor: "pointer" }}
                    htmlFor="events registered"
                  >
                    Events Registered
                  </label>
                </div>
              </button>

              <button
                onClick={() =>
                  wideView(
                    "events information",
                    null,
                    setOption,
                    setChoice,
                    option,
                    choice
                  )
                }
                className={styles.btn}
              >
                <div id={styles.flexbetn}>
                  <img
                    alt="icon loading..."
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706500/nitsmun/tasks-1_tlxmil.svg"
                  />
                  <label
                    id={styles.labessize}
                    style={{ cursor: "pointer" }}
                    htmlFor="upcoming events"
                  >
                    Upcoming Events
                  </label>
                </div>
              </button>
            </div>
            <div className={styles.col}>
              <Link to="/dashboard/edit" className={styles.btn} id={styles.flexbetn}>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706541/nitsmun/Vector_kntss1.svg"
                />
                <label
                  id={styles.labessize}
                  style={{ cursor: "pointer" }}
                  htmlFor="edit profile"
                >
                  Edit Profile
                </label>
              </Link>
              <button className={styles.btn} onClick={handleSignout}>
                <div id={styles.flexbetn}>
                  <img
                    alt="icon loading..."
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706540/nitsmun/material-symbols_logout_wibfg1.svg"
                  />
                  <label
                    id={styles.labessize}
                    style={{ cursor: "pointer" }}
                    htmlFor="logout"
                  >
                    Log Out
                  </label>
                </div>
              </button>
              <button className={`${styles.btn}`}>
                <div>
                  <img
                    alt="icon loading..."
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706894/nitsmun/Vector_1_aprbcr.svg"
                  />

                  <label htmlFor="queries">
                    <h1 className={styles.queries}>For queries contact</h1>
                    <a style={{ color: "#333333" }} href="tel:+91 8402822820">
                      {" "}
                      <h2 className={styles.queries}>+91 8402822820</h2>
                    </a>
                  </label>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : linkReceived ? (
        <div id={styles.conditionallink}>
          <h2>Click on below link: </h2>
          <a href={verificationLink}>
            {" "}
            <p>{verificationLink}</p>
          </a>
        </div>
      ) : (
        <main id={styles.verificationparent}>
          <h1>
            You need to verify your email first to register for the Annual Conference 2024
          </h1>
          <h3>It&apos;s a very simple step. Follow the quick easy steps listed below:</h3>
          <ul>
            <li>
              Click on the below Send Email verification link button to send the
              Verification link to your{" "}
              <span id={styles.boldss}>
                &quot;Personal Email&quot; that you provided during the signup process
              </span>
            </li>
            <li>
              <button
                style={{
                  cursor: sending ? "not-allowed" : "pointer",
                  opacity: sending ? "0.5" : "1",
                }}
                disabled={sending}
                id={styles.btn}
                onClick={handleSendVerificationLink}
              >
                {sending ? "Sending..." : "Send Email Verification link"}
              </button>
            </li>
            <li>Check your personal email&apos;s inbox and spam folder too</li>
            <li>
              After sucessful verification simply refresh the page, and click on{" "}
              <span id={styles.boldss}>Apply</span> in Navbar to register for the Annual
              Conference 2024
            </li>
          </ul>
        </main>
      )}
    </>
  );
};

const Dashboard = () => {
  const [events, setEvents] = useState(null);
  const [eventsInfo, setEventsinfo] = useState(null);

  const { role, isLoggedIn } = useContext(UserContext);
  const isTrue = useMemo(() => {
    return Boolean(role && isLoggedIn);
  }, [role, isLoggedIn]);

  const isStudentTrue = useMemo(() => {
    return Boolean(role === "client" && isLoggedIn);
  }, [role, isLoggedIn]);
  const profileKey = useMemo(() => ["profile"], []);
  const eventsKey = useMemo(() => ["studentEventRegs"], []);
  const { data, error, isLoading } = useQuery(profileKey, fetchProfile, {
    enabled: isTrue,
  });

  const {
    data: eventsData,
    error: eventsError,
    isLoading: eventsLoading,
  } = useQuery(eventsKey, fetchAllStudentRegistrations, {
    enabled: isStudentTrue,
  });
  const allData = eventsData?.ypEvents;
  const pendingStatusEvent = allData?.filter((item) => item.status === "pending");
  const confirmedStatusEvent = allData?.filter((item) => item.status === "confirmed");
  const declinedStatusEvent = allData?.filter((item) => item.status === "declined");
  // console.log(allData);
  console.log(pendingStatusEvent);
  console.log(confirmedStatusEvent);
  console.log(declinedStatusEvent);

  useEffect(() => {
    setEvents(allData);
    setEventsinfo(null);

    document.title = "Dashboard | NITSMUN";
  }, [allData]);
  // console.log(events)
  if (error || eventsError) {
    return <div>Something went wrong!</div>;
  }
  if (isLoading || eventsLoading) {
    return <div>Loading...</div>;
  }
  if (Cookies.get("authToken")) {
    return (
      <>
        {/* <main className={styles.mainCont}>
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>

      </main> */}

        <div className={styles.dashPage}>
          <Navbar page="CONTACT" />
          <div className={styles.pageCont}>
            {/* <ul>
            {data.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul> */}
            <Card
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703354598/dashboard_photo_pdunq5.svg"
              name={data?.name}
              scholarID={data?.scholarID}
              email={data?.email}
              branch={data?.branch}
              phone={data?.phone}
              isStudentOfNITS={data?.isStudentOfNITS}
              events={events}
              eventsInfo={eventsInfo}
              photo={data?.photo}
              isVerified={data?.isVerified}
            />
          </div>
        </div>
      </>
    );
  }

  window.location.href = "/";
  toast.error("You have not logged in!", {
    duration: 10000,
  });
  return null;
};
export default Dashboard;
