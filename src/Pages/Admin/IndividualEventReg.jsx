/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useMemo, useContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { UserContext } from "../../Context/ContextProv";
import { fetchAllRegistrationsInAnEvent } from "../../ReactQuery/Fetchers/Admin/GetRegisteredEvents";
import styles from "./Styles.module.scss";

const IndividualEventReg = () => {
  const navigate = useNavigate();
  const { role, isLoggedIn } = useContext(UserContext);
  const { eventID } = useParams();
  const regID = eventID;
  const [confirming, setConfirming] = useState(false);
  const [declining, setDeclining] = useState(false);
  const [assigning, setAssigning] = useState(false);
  const queryKey = useMemo(() => ["RegisteredEventData"], []);
  const isEnabled = useMemo(() => {
    return Boolean(isLoggedIn && role === "admin");
  }, [role, isLoggedIn]);
  const { data, isLoading, error } = useQuery(queryKey, fetchAllRegistrationsInAnEvent, {
    enabled: isEnabled,
  });
  const events = data?.allSuchEvents;
  const particularEventDetails = events?.filter((item) => item?._id === eventID);

  const token = Cookies.get("authToken");
  const tokenConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    document.title = `${particularEventDetails[0]?.email} | NITSMUN`;
  }, [particularEventDetails]);

  // confirm registration
  const handleConfirm = async (e) => {
    e.preventDefault();
    setConfirming(true);
    try {
      await axios
        .put(`${import.meta.env.VITE_REACT_APP_API}/confirm/reg`, { regID }, tokenConfig)
        .then((res) => {
          if (res.data.message === "Registration confirmed") {
            toast("Registration confirmed");
            window.location.href = "/allreg";
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "No such registration exists":
            toast("No such registration exists");
            break;
          case "No such status exists":
            toast("No such status exists");
            break;
          case "Not authorized to access this endpoint":
            toast("Not authorized to access this endpoint");
            break;
          case "Something went wrong":
            toast("Something went wrong");
            break;
          default:
            toast("Something went wrong");
            break;
        }
      }
    } finally {
      setConfirming(false);
    }
  };

  // decline the registration
  const handleDecline = async (e) => {
    e.preventDefault();
    setDeclining(true);
    try {
      await axios
        .put(`${import.meta.env.VITE_REACT_APP_API}/decline/reg`, { regID }, tokenConfig)
        .then((res) => {
          if (res.data.message === "Registration Declined") {
            toast("Registration Declined");
            window.location.reload();
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "No such registration exists":
            toast("No such registration exists");
            break;
          case "No such status exists":
            toast("No such status exists");
            break;
          case "Not authorized to access this endpoint":
            toast("Not authorized to access this endpoint");
            break;
          case "Something went wrong":
            toast("something went wrong");
            break;
          default:
            toast("Something went wrong");
            break;
        }
      }
    } finally {
      setDeclining(false);
    }
  };

  const [impData, setImpData] = useState({
    portfolio: "",
    committee: "",
  });

  const handleAssign = async (e) => {
    e.preventDefault();

    setAssigning(true);
    try {
      await axios
        .put(
          `${import.meta.env.VITE_REACT_APP_API}/admin/assign/portfolios`,
          { eventID, portfolio: impData.portfolio, committee: impData.committee },
          tokenConfig
        )
        .then((res) => {
          if (res.data.message === "Portfolio already assigned") {
            toast("Portfolio already assigned");
          } else if (res.data.message === "Committee already assigned") {
            toast("Committee already assigned");
          } else if (res.data.message === "Portfolio and committee updated") {
            toast("Portfolio, committee updated and email sent");
            navigate("/allreg");
          }
        });
    } catch (ee) {
      if (ee.response) {
        switch (ee.response.data.error) {
          case "payload is missing":
            toast("please enter boht the committee and portfolio");
            break;
          case "No such event exists":
            toast("No such event exists");
            break;
          case "Event registartion confirmation is still pending":
            toast("Event registartion confirmation is still pending");
            break;
          case "Not authorized":
            toast("Not authorized");
            break;
          case "Something went wrong":
            toast("something went wrong");
            break;
          default:
            toast("Something went wrong");
            break;
        }
      }
    } finally {
      setAssigning(false);
    }
  };

  const isButtonActive = useMemo(() => {
    return Boolean(impData.portfolio === "" || impData.committee === "");
  }, [impData]);
  // console.log(isButtonActive)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  if (!events) {
    return <p>loading...</p>;
  }
  return (
    <main id={styles.fixheight}>
      <h1>Name: {particularEventDetails[0]?.name}</h1>
      <h1>Email: {particularEventDetails[0]?.email}</h1>
      <h1>College: {particularEventDetails[0]?.college}</h1>
      <h1>Phone: {particularEventDetails[0]?.phone}</h1>
      {particularEventDetails[0]?.college === "NIT Silchar" && (
        <main>
          <h1>Scholar ID: {particularEventDetails[0]?.scholarid}</h1>
          <h1>Batch: {particularEventDetails[0]?.batch}</h1>
        </main>
      )}

      <div id={styles.img_hlder}>
        <img src={particularEventDetails[0]?.payment} alt="" />
      </div>
      <h1>Registered at: {particularEventDetails[0]?.regsiteredat}</h1>
      <h1>Status: {particularEventDetails[0]?.status}</h1>
      <h1>Committee preference by the user: </h1>
      {particularEventDetails[0]?.committeePreference && (
        <ul>
          <li>{particularEventDetails[0]?.committeePreference[0]}</li>
          <li>{particularEventDetails[0]?.committeePreference[1]}</li>
          <li>{particularEventDetails[0]?.committeePreference[2]}</li>
        </ul>
      )}

      <h1>Portfolio preference by the user: </h1>
      {particularEventDetails[0]?.portfolioPreference && (
        <ul>
          <li>{particularEventDetails[0]?.portfolioPreference[0]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[1]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[2]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[3]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[4]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[5]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[6]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[7]}</li>
          <li>{particularEventDetails[0]?.portfolioPreference[8]}</li>
        </ul>
      )}
      <div>
        {particularEventDetails[0]?.status === "pending" && (
          <button
            disabled={confirming}
            style={{
              cursor: confirming ? "not-allowed" : "pointer",
              opacity: confirming ? "0.5" : "1",
            }}
            onClick={handleConfirm}
          >
            Confirm the registration
          </button>
        )}
      </div>

      <div className={styles.topmar}>
        {particularEventDetails[0]?.status === "pending" && (
          <button
            disabled={declining}
            style={{
              cursor: declining ? "not-allowed" : "pointer",
              opacity: declining ? "0.5" : "1",
            }}
            onClick={handleDecline}
          >
            Decline the registration
          </button>
        )}
      </div>

      {particularEventDetails[0]?.cofirmedRegistrationAt && (
        <h1>
          cofirmedRegistrationAt: {particularEventDetails[0]?.cofirmedRegistrationAt}
        </h1>
      )}

      <h1>assignedPortfolio: {particularEventDetails[0]?.assignedPortfolio}</h1>
      <h1>assignedCommittee: {particularEventDetails[0]?.assignedCommittee}</h1>

      {particularEventDetails[0]?.status === "confirmed" &&
        particularEventDetails[0]?.assignedPortfolio === "" &&
        particularEventDetails[0]?.assignedCommittee === "" && (
          <main id={styles.margindedo}>
            <div>
              <label htmlFor="portfolio">Assign Portfolio</label>
              <input
                type="text"
                id="portfolio"
                placeholder="enter assigned portfolio"
                value={impData.portfolio}
                onChange={(e) =>
                  setImpData({
                    portfolio: e.target.value,
                    committee: impData.committee,
                  })
                }
              />
            </div>

            <div>
              <label htmlFor="committee">Assign Committee</label>
              <input
                type="text"
                id="committee"
                value={impData.committee}
                placeholder="enter assigned Committee"
                onChange={(e) => {
                  setImpData({
                    portfolio: impData.portfolio,
                    committee: e.target.value,
                  });
                }}
              />
            </div>

            <button
              disabled={assigning || isButtonActive}
              style={{
                cursor: assigning || isButtonActive ? "not-allowed" : "pointer",
                opacity: assigning || isButtonActive ? "0.5" : "1",
              }}
              onClick={handleAssign}
            >
              {assigning ? "Assigning..." : "Assign"}
            </button>
          </main>
        )}
    </main>
  );
};

export default IndividualEventReg;
