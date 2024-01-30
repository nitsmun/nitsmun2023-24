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

const wideView = (i, j, setoption, setchoice, Option, Choice) => {
  if (Option === false) {
    setoption(i);
  } else {
    setoption(false);
  }
  if (Choice) {
    setchoice(j);
  } else {
    setchoice(null);
  }
};

const WidePopup = (props) => {

  if (props.name === "events registered") {
    return (
      <div className={styles.widePop}>
        <div className={styles.exitCont}>
          <button onClick={() => wideView("events registered", null, props.setOption, props.setChoice, props.option, props.choice)} className={styles.exit}>
            <img
              className={styles.cross}
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg"
              alt="cross"
            />
          </button>
        </div>
        <div className={styles.innerCont}>
          {props.infos === null ? (
            <h1>No events registered</h1>
          ) : (
            props.infos.map((item) => <li>{item}</li>)
          )}
        </div>
      </div>
    );
  }
  if (props.name === "events information") {
    return (
      <div className={styles.widePop}>
        <div className={styles.exitCont}>
          <button onClick={() => wideView("events registered", null, props.setOption, props.setChoice, props.option, props.choice)} className={styles.exit}>
            <img
              className={styles.cross}
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg"
              alt="cross"
            />
          </button>
        </div>
        {props.infos === null ? (
          <h1>No upcoming events</h1>
        ) : (
          props.infos.map((item) => <li>{item}</li>)
        )}
      </div>
    );
  }

  return null;
};

const Card = (props) => {
  const [choice, setChoice] = useState(null);
  const [option, setOption] = useState(false);
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
            toast("Verification link sent successfully");
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
      {option === false ? null : <WidePopup name={option} infos={choice} option={option} choice={choice} setOption={setOption} setChoice={setChoice} />}
      <div className={styles.cardWrap}>
        {/* <h1 className={styles.h1}>USER DASHBOARD</h1> */}
        <div className={styles.details}>
          <div className={styles.personalDetails}>
            <div className={styles.userDetails}>
              <div className={styles.person}>
                <div className={styles.photoParent}>
                  <img className={styles.img} alt="loading.." src={props.photo} />
                </div>
                <div className={styles.bio}>
                  <div className={styles.field}>
                    <h1 className={styles.h1}>Name</h1>
                    <h1 className={styles.desc}>{props.name}</h1>
                  </div>

                  {props.isStudentOfNITS === true ? (
                    <>
                      <div className={styles.field}>
                        <h1 className={styles.h1}>Scholar ID</h1>
                        <h1 className={styles.desc}>{props.phone}</h1>
                      </div>
                      <div className={styles.field}>
                        <h1 className={styles.h1}>Branch</h1>
                        <h1 className={styles.desc}>{props.branch}</h1>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className={styles.contactSec}>
                <div className={styles.personalContact}>
                  <h1 className={styles.heading}>Contact Details</h1>
                  <div className={styles.content}>
                    <div className={styles.field}>
                      <h1 className={styles.h1}>Phone Number</h1>
                      <h1 className={styles.desc}>{props.phone}</h1>
                    </div>

                    <div className={styles.field}>
                      <h1 className={styles.h1}>Email</h1>
                      <h1 className={styles.desc}>{props.email}</h1>
                    </div>
                  </div>
                </div>
                {props.isStudentOfNITS === true ? (
                  <div className={styles.instContact}>
                    <h1 className={styles.heading}>Contact Details</h1>
                    <div className={styles.content}>
                      <div className={styles.field}>
                        <h1 className={styles.h1}>Phone Number</h1>
                        <h1 className={styles.desc}>{props.phone}</h1>
                      </div>

                      <div className={styles.field}>
                        <h1 className={styles.h1}>Email</h1>
                        <h1 className={styles.desc}>{props.instituteEmail}</h1>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={styles.eventCol}>
              <div className={styles.parent}>
                <ul className={styles.eventsRegistered}>
                  {props.events === null ? (
                    <h1 className={styles.h1}>No events registered yet</h1>
                  ) : (
                    props.events.map((item) => <li>{item}</li>)
                  )}
                </ul>
              </div>
              <div className={styles.parent}>
                <div className={styles.eventsUpcoming}>
                  {props.eventsInfo === null ? (
                    <h1 className={styles.h1}>No upcoming events</h1>
                  ) : (
                    props.eventsInfo.map((item) => (
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
                <div>
                  <img
                    alt="icon loading..."
                    src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706499/nitsmun/dashboard_yynv9s.svg"
                  />
                  <label style={{ cursor: "pointer" }} htmlFor="dashboard">
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
                wideView("events registered", null, setOption, setChoice, option, choice)
              }
              className={styles.btn}
            >
              <div>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706500/nitsmun/tasks-1_tlxmil.svg"
                />
                <label style={{ cursor: "pointer" }} htmlFor="events registered">
                  Events Registered
                </label>
              </div>
            </button>
            <button
              onClick={() =>
                wideView("events information", null, setOption, setChoice, option, choice)
              }
              className={styles.btn}
            >
              <div>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706500/nitsmun/tasks-1_tlxmil.svg"
                />
                <label style={{ cursor: "pointer" }} htmlFor="upcoming events">
                  Upcoming Events
                </label>
              </div>
            </button>
          </div>
          <div className={styles.col}>
            <Link to="/dashboard/edit" className={styles.btn}>
              <img
                alt="icon loading..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706541/nitsmun/Vector_kntss1.svg"
              />
              <label style={{ cursor: "pointer" }} htmlFor="edit profile">
                Edit Profile
              </label>
            </Link>
            <button className={styles.btn} onClick={handleSignout}>
              <div>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706540/nitsmun/material-symbols_logout_wibfg1.svg"
                />
                <label style={{ cursor: "pointer" }} htmlFor="logout">
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
                  <a style={{ color: "#333333" }} href="tel:1234512345">
                    {" "}
                    <h2 className={styles.queries}>12345-12345</h2>
                  </a>
                </label>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  const [events, setEvents] = useState(null);
  const [eventsInfo, setEventsinfo] = useState(null);
  useEffect(() => {
    setEvents(null);
    setEventsinfo(null);
    document.title = "Dashboard | NITSMUN";
  }, []);
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
  console.log(allData);
  console.log(pendingStatusEvent);
  console.log(confirmedStatusEvent);
  console.log(declinedStatusEvent);

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
  toast("You have not logged in!");
  return null;
};
export default Dashboard;
