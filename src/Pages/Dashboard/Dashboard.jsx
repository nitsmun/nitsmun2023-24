import React, { useState, useEffect, useContext, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { fetchProfile } from "../../ReactQuery/Fetchers/Profile";
import { UserContext } from "../../Context/ContextProv";
import styles from "./Dashboard.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
const WidePopup = (props) => {
  if (props.name === "events registered") {
    return (
      <div className={styles.widePop}>
        {props.infos === null ? (
          <h1>No events registered</h1>
        ) : (
          props.infos.map((item) => <li>{item}</li>)
        )}
      </div>
    );
  }
  if (props.name === "events information") {
    return (
      <div className={styles.widePop}>
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
  const wideView = (i, j) => {
    setOption(i);
    setChoice(j);
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
    window.location.reload();
    navigate("/");
  };

  return (
    <>
      {option === false ? null : <WidePopup name={option} infos={choice} />}
      <div className={styles.cardWrap}>
        {/* <h1 className={styles.h1}>USER DASHBOARD</h1> */}
        <div className={styles.details}>
          <div className={styles.personalDetails}>
            <div className={styles.userDetails}>
              <div className={styles.person}>
                <div className={styles.photoParent}>
                  <img
                    alt="loading.."
                    src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1706367691/prof_rg9g0w.jpg"
                  />
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
            <button className={styles.btn}>
              <div>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706499/nitsmun/dashboard_yynv9s.svg"
                />
                <label htmlFor="dashboard">Dashboard</label>
              </div>
            </button>
            <button
              onClick={() => wideView("events registered", null)}
              className={styles.btn}
            >
              <div>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706500/nitsmun/tasks-1_tlxmil.svg"
                />
                <label htmlFor="events registered">Events Registered</label>
              </div>
            </button>
            <button
              onClick={() => wideView("events information", null)}
              className={styles.btn}
            >
              <div>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706500/nitsmun/tasks-1_tlxmil.svg"
                />
                <label htmlFor="upcoming events">Upcoming Events</label>
              </div>
            </button>
          </div>
          <div className={styles.col}>
            <Link to="/Dashboard/edit" className={styles.btn}>
              <img
                alt="icon loading..."
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706541/nitsmun/Vector_kntss1.svg"
              />
              <label htmlFor="edit profile">Edit Profile</label>
            </Link>
            <button className={styles.btn} onClick={handleSignout}>
              <div>
                <img
                  alt="icon loading..."
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1704706540/nitsmun/material-symbols_logout_wibfg1.svg"
                />
                <label htmlFor="logout">Log Out</label>
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
                  <h2 className={styles.queries}>12345-12345</h2>
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
  }, []);
  const { role, isLoggedIn } = useContext(UserContext);
  const isTrue = useMemo(() => {
    return Boolean(role && isLoggedIn);
  }, [role, isLoggedIn]);
  const { data, error, isLoading } = useQuery("profile", fetchProfile, {
    enabled: isTrue,
  });

  if (error) {
    return <div>Something went wrong!</div>;
  }
  if (isLoading) {
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
