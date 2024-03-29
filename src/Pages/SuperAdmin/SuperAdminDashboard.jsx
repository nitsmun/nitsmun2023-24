import Cookies from "js-cookie";
import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../Context/ContextProv";
import styles from "./Styles.module.scss";

const SuperAdminDashboard = () => {
  const { role } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (role !== "superadmin") {
      navigate("/");
    }
  }, [role, navigate]);

  const handleSignout = (e) => {
    e.preventDefault();
    Cookies.remove("authToken");
    window.location.href = "/";
  };

  return (
    <main className={styles.top}>
      <h1>SuperAdmin Dashboard</h1>
      <Link to="/allaccounts">All Signup Accounts</Link>
      <Link to="/contactusresponses">Contact Us Responses</Link>
      <Link to="/scheduled">All Deletion scheduled accounts</Link>
      <div>
        <div>
          <button style={{ cursor: "pointer" }} onClick={handleSignout}>
            Signout
          </button>
        </div>
      </div>
    </main>
  );
};

export default SuperAdminDashboard;
