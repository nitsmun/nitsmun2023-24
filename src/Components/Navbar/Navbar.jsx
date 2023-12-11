import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.scss";
const Navbar = (props) => {
  const isEvents = false;
  const navLinks = [
    { name: "HOME", dest: "/", id: "home" },
    { name: "COMMITTEES", dest: "", id: "committees" },
    { name: "TEAM", dest: "/team", id: "team" },
    { name: "CONTACT", dest: "", id: "contact" },
    { name: "FAQ", dest: "", id: "faq" },
  ];
  const events = [
    { name: "EVENT1", dest: "" },
    { name: "EVENT2", dest: "" },
    { name: "EVENT3", dest: "" },
  ];
  const [navpos, setNavpos] = useState("0%");
  const [navtrans, setNavtrans] = useState("0");
  const menuClick = () => {
    // navpos === "0%" ? setNavpos("80%") : setNavpos("0%");
    // navtrans === "0" ? setNavtrans("1") : setNavtrans("0");
    if (navpos === "0%") {
      setNavpos("100%");
    } else {
      setNavpos("0%");
    }
    if (navtrans === "0") {
      setNavtrans("1");
    } else {
      setNavtrans("0");
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <button onClick={menuClick} style={{ backgroundColor: "transparent" }}>
          <img
            src={
              navpos === "0%"
                ? "https://res.cloudinary.com/dhry5xscm/image/upload/v1695653029/nitsmun/Group_2062_knm91j.svg"
                : "https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg"
            }
            style={{ filter: `invert(${navpos === "0%" ? "0%" : "100%"})` }}
            className={styles.menuBtn}
            alt="Hamburger icon"
          />
        </button>
      </div>
      <div
        className={styles.mobileNav}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2rem",
          rowGap: "1rem",
          height: `${navpos}`,
          opacity: `${navtrans}`,
        }}
      >
        {navLinks.map((item) => (
          <NavLink
            to={item.dest}
            style={{
              backgroundColor: props.page === item.name ? "#c9984e" : "transparent",
              color: "#ffffff",
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        <div
          className={styles.deskNav}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: "6rem",
            paddingBottom: "1rem",
            paddingTop: "1rem",
            padding: "1rem",
          }}
        >
          {navLinks.map((item) => (
            <NavLink
              to={item.dest}
              style={{
                backgroundColor: props.page === item.name ? "#c9984e" : "transparent",
                color: props.page === "TEAM" ? "#1d1c41" : "#ffffff",
              }}
            >
              {item.name}
            </NavLink>
          ))}
          {isEvents === true ? (
            <select>
              EVENTS
              {events.map((item) => (
                <option>
                  <Link to={item.dest}>{item.name}</Link>
                </option>
              ))}
            </select>
          ) : null}
        </div>
        <img
          src="https://res.cloudinary.com/dhry5xscm/image/upload/v1695653029/nitsmun/Group_2062_knm91j.svg"
          className={styles.deskHam}
          alt="img"
        />
      </div>
    </div>
  );
};
export default Navbar;
