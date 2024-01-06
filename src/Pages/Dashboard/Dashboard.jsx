
import React, { useState, useEffect,useContext } from "react";
// import { useQuery } from "react-query";
// import { fetchProfile } from "../../ReactQuery/Fetchers/Profile";
import { UserContext } from "../../Context/ContextProv";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const WidePopup = (props) => {
  if (props.name === 'events registered') {
    return (
      <div className={styles.widePop}>
        {
          props.infos === null ?
            <h1>
              No events registered
            </h1> :
            props.infos.map((item) => <li>{item}</li>)
        }
      </div>
    );
  }
  if (props.name === 'events information') {
    return (
      <div className={styles.widePop}>
        {
          props.infos === null ?
            <h1>
              No upcoming events
            </h1> :
            props.infos.map((item) => <li>{item}</li>)
        }
      </div>
    );
  }

  return null;

}


const Card = (props) => {
  const [choice, setChoice] = useState(null);
  const [option, setOption] = useState(false);
  const wideView = (i, j) => {
    setOption(i);
    setChoice(j);
  }
  const { role } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "superadmin") {
      navigate("/superadmin");
    }
  }, [role, navigate]);


  return (
    <>
      {
        option === false ?
          null : <WidePopup name={option} infos={choice} />
      }
      <div className={styles.cardWrap}>
        <div className={styles.details}>
          <h1 className={styles.h1}>USER DASHBOARD</h1>
          <div className={styles.personalDetails}>
            <div className={styles.outerCont}>
              <div className={styles.photoCont}><img alt="loading.." className={styles.photo} src={props.src} /></div>
              <div className={styles.userDetails}>
                <h1 className={styles.h1}>User Details</h1>
                <div className={styles.cont}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <h2 className={styles.h2}>{props.name}</h2>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="scholar ID" className={styles.label}>Scholar ID</label>
                    <h2 className={styles.h2}>{props.scholarID}</h2>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="branch" className={styles.label}>Branch</label>
                    <h2 className={styles.h2}>{props.branch}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.outerCont}>
              <div className={styles.contactDetails}>
                <div className={styles.contactCol}>
                  <h1 className={styles.h1}>Contact Details</h1>
                  <div className={styles.phoneCont}>
                    <label htmlFor="phone number" className={styles.label}>Phone Number</label>
                    <h2 className={styles.h2}>
                      {props.phone}
                    </h2>
                  </div>
                  <div className={styles.emailCont}>
                    <label htmlFor="Email" className={styles.label}>Email</label>
                    <h2 className={styles.h2}>
                      {props.email}
                    </h2>
                  </div>
                </div>
                <div className={styles.nitCol}>
                  <h1 className={styles.h1}>Contact Details</h1>
                  <div className={styles.phoneCont}>
                    <label htmlFor="phone number" className={styles.label}>Phone Number</label>
                    <h2 className={styles.h2}>
                      {props.phone}
                    </h2>
                  </div>
                  <div className={styles.instCont}>
                    <label htmlFor="institute email" className={styles.label}>Institute Email</label>
                    <h2 className={styles.h2}>
                      {props.instId}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eventCol}>
              <div className={styles.parent}>
                <ul className={styles.eventsRegistered}>
                  {props.events === null ? <h1 className={styles.h1}>No events registered yet</h1> : props.events.map((item) => <li>{item}</li>)}
                </ul>
              </div>
              <div className={styles.parent}>
                <div className={styles.eventsUpcoming}>
                  {props.eventsInfo === null ? <h1 className={styles.h1}>No upcoming events</h1> :
                    props.eventsInfo.map((item) => <li>
                      <h1>{item.name}</h1>
                      <div className={styles.detailsCont}>
                        <Link to={props.eventsTo} className={styles.knowMore}>Know more</Link>
                        <Link to={props.regTo} className={styles.regNow}>Register Now</Link>
                      </div>
                    </li>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.col}>
            <button className={styles.btn}>
              <div><img alt="icon loading..." src="" /><label htmlFor="dashboard">Dashboard</label></div>
            </button>
            <button onClick={() => wideView('events registered', null)} className={styles.btn}>
              <div><img alt="icon loading..." src="" /><label htmlFor="events registered">Events Registered</label></div>
            </button>
            <button onClick={() => wideView('events information', null)} className={styles.btn}>
              <div><img alt="icon loading..." src="" /><label htmlFor="upcoming events">Upcoming Events</label></div>
            </button>
          </div>
          <div className={styles.col}>
            <Link to='/Dashboard/edit' className={styles.btn}>
              <img alt="icon loading..." src="" /><label htmlFor="edit profile">Edit Profile</label>
            </Link>
            <button className={styles.btn}>
              <div><img alt="icon loading..." src="" /><label htmlFor="logout">Log Out</label></div>
            </button>
            <button className={`${styles.btn}`}>
              <div><img alt="icon loading..." src="" />
                <label htmlFor="queries">
                  <h1 className={styles.queries}>For queries contact</h1>
                  <h2 className={styles.queries}>12345-12345</h2>
                </label>
              </div>
            </button>
          </div>
        </div>
      </div >
    </>
  );
};
const Dashboard = () => {
  // const { data, error, isLoading, isFetching } = useQuery("profile", fetchProfile, {
  //   refetchOnWindowFocus: "always",
  // });

  // if (error) {
  //   return <div>Something went wrong!</div>;
  // }
  // if (isLoading || isFetching) {
  //   return <div>Loading...</div>;
  // }

  const [events, setEvents] = useState(null);
  const [eventsInfo, setEventsinfo] = useState(null);
  useEffect(() => {
    setEvents(null);
    setEventsinfo(null);
  }, []);
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
          <Card src="https://res.cloudinary.com/dhry5xscm/image/upload/v1703354598/dashboard_photo_pdunq5.svg" name="Barnil Sarma" scholarID="2214025" branch="ECE" events={events} eventsInfo={eventsInfo} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
