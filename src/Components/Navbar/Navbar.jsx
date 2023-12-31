import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.scss";
const Navbar = (props) => {
  const [deskHamState, setDeskHam] = useState(0);
  const deskHam = [
    { id: "1", name: "SEGMENTS", dest: "" },
    { id: "2", name: "PHOTO GALLERY", dest: "/photo" },
    { id: "3", name: "ARCHIVE", dest: "" },
    { id: "4", name: "APPLY NOW", dest: "" },
  ];
  const isEvents = false;
  const navLinks = [
    { name: "HOME", dest: "/", id: "home" },
    { name: "COMMITTEES", dest: "", id: "committees" },
    { name: "TEAM", dest: "/team", id: "team" },
    { name: "CONTACT", dest: "/contact", id: "contact" },
    { name: "FAQ", dest: "", id: "faq" },
  ];
  const navLinksMobile = [
    { name: "HOME", dest: "/", id: "home" },
    { name: "SEGMENTS", dest: "", id: "segments" },
    { name: "TEAM", dest: "/team", id: "team" },
    { name: "COMMITTEES", dest: "", id: "committees" },
    { name: "PHOTO GALLERY", dest: "/photo", id: "photo" },
    { name: "ABOUT", dest: "", id: "about" },
    { name: "CONTACT", dest: "/contact", id: "contact" },
    { name: "FAQ", dest: "", id: "faq" },
    { name: "ARCHIVE", dest: "", id: "archive" },
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
  const changeDeskHamState = () => {
    setDeskHam(deskHamState === 0 ? 1 : 0);
  };
  return (
    <>
      <div
        className={styles.mobileNav}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "2rem",
          rowGap: "1rem",
          height: `${navpos === "0%" ? "0vh" : "100vh"}`,
          opacity: `${navtrans}`,
        }}
      >
        <div className={styles.crossCont}>
          <button
            onClick={menuClick}
            style={{ backgroundColor: "transparent" }}
            className={styles.menuBtn}
          >
            <img
              src={
                navpos === "0%"
                  ? "https://res.cloudinary.com/dhry5xscm/image/upload/v1695653029/nitsmun/Group_2062_knm91j.svg"
                  : "https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg"
              }
              style={{ filter: `invert(${navpos === "0%" ? "0%" : "100%"})` }}
              className={styles.img}
              alt="Hamburger icon"
            />
          </button>
        </div>
        {navLinksMobile.map((item) =>
          navtrans === "1" ? (
            <NavLink
              to={item.dest}
              style={{
                backgroundColor: props.page === item.name ? "#c9984e" : "transparent",
                color: "#ffffff",
                fontSize: `${navtrans === "0" ? "0px" : "1rem"}`,
              }}
            >
              {item.name}
            </NavLink>
          ) : null
        )}
      </div>
      {deskHamState === 1 ? (
        <div
          className={styles.deskhamPopun}
          style={{
            color: "#ffffff",
            opacity: `${deskHamState}`,
            transition: "ease 500ms",
          }}
        >
          {deskHam.map((item) => (
            <NavLink to={item.dest} className={styles.eachOption}>
              {item.name}
            </NavLink>
          ))}
        </div>
      ) : null}
      <div className={styles.navCont}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={menuClick}
            style={{ backgroundColor: "transparent" }}
            className={styles.menuBtn}
          >
            <img
              src={
                navpos === "0%"
                  ? "https://res.cloudinary.com/dhry5xscm/image/upload/v1695653029/nitsmun/Group_2062_knm91j.svg"
                  : "https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg"
              }
              style={{ filter: `invert(${navpos === "0%" ? "0%" : "100%"})` }}
              className={styles.img}
              alt="Hamburger icon"
            />
          </button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className={styles.deskNav}
            style={{
              display: "flex",
              width: "90vw",
              flexDirection: "row",
              justifyContent: "center",
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
                  color:
                    props.page === "HOME" || props.page === "WRAPPED"
                      ? "#ffffff"
                      : "#1d1c41",
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
          <button
            onClick={changeDeskHamState}
            style={{ backgroundColor: "transparent", border: "0px solid transparent" }}
          >
            <img
              src="https://res.cloudinary.com/dhry5xscm/image/upload/v1695653029/nitsmun/Group_2062_knm91j.svg"
              className={styles.deskHam}
              alt="img"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
