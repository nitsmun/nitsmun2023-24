import React, { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../Context/ContextProv";
import styles from "../SuperAdmin/Styles.module.scss";

const AdminDashboard = () => {
  const { role } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Admin Dashboard | NITSMUN";
    if (role !== "admin") {
      navigate("/");
    }
  }, [navigate, role]);

  // const eventName = "yp";
  const handleSignout = (e) => {
    e.preventDefault();
    Cookies.remove("authToken");
    window.location.href = "/";
  };

  return (
    <div className={styles.top}>
      <h1>Admin Dashboard</h1>
      <div>
        {" "}
        <Link to="/allreg">All registrations</Link>
      </div>
      {/* <div>
        {" "}
        <Link to={`/reg/${eventName}/confirmed`}>Confirmed registrations</Link>
      </div>
      <div>
        <Link to={`/reg/${eventName}/pending`}>Pending registrations</Link>
      </div>
      <div>
        {" "}
        <Link to={`/reg/${eventName}/declined`}>Declined registrations</Link>
      </div> */}

      <div>
        <button style={{ cursor: "pointer", marginTop: "3.5vw" }} onClick={handleSignout}>
          Signout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
