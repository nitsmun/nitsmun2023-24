/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useMemo, useContext, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { UserContext } from "../../Context/ContextProv";
import { fetchAllRegistrationsInAnEvent } from "../../ReactQuery/Fetchers/Admin/GetRegisteredEvents";

const IndividualEventReg = () => {
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
  console.log(particularEventDetails);

  const token = Cookies.get("authToken");
  const tokenConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

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
            toast("Portfolio and committee updated");
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
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <>
      <h1>{particularEventDetails?.name}</h1>
      <h1>{particularEventDetails?.email}</h1>
      <h1>{particularEventDetails?.college}</h1>
      <h1>{particularEventDetails?.scholarid}</h1>
      <h1>{particularEventDetails?.batch}</h1>
      <div>
        <img src={particularEventDetails?.payment} alt="" />
      </div>
      <p>{particularEventDetails?.regsiteredat}</p>
      <p>{particularEventDetails?.status}</p>
      {particularEventDetails?.status === "pending" && (
        <button
          disabled={confirming}
          style={{
            cursor: confirming ? "not-allowed" : "cursor",
            opacity: confirming ? "0.5" : "1",
          }}
          onClick={handleConfirm}
        >
          Confirm the registration
        </button>
      )}

      {particularEventDetails?.status === "pending" && (
        <button
          disabled={declining}
          style={{
            cursor: declining ? "not-allowed" : "cursor",
            opacity: declining ? "0.5" : "1",
          }}
          onClick={handleDecline}
        >
          Decline the registration
        </button>
      )}

      <p>
        {particularEventDetails?.cofirmedRegistrationAt && (
          <p>{particularEventDetails?.cofirmedRegistrationAt}</p>
        )}
      </p>
      <p>{particularEventDetails?.assignedPortfolio}</p>
      <p>{particularEventDetails?.assignedCommittee}</p>

      {particularEventDetails?.status === "confirmed" &&
        particularEventDetails?.assignedPortfolio === "" &&
        particularEventDetails?.assignedCommittee === "" && (
          <main>
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

            <label htmlFor="committee">Assign Committee</label>
            <input
              type="text"
              id="committee"
              value={impData.committee}
              onChange={(e) => {
                setImpData({
                  portfolio: impData.portfolio,
                  committee: e.target.value,
                });
              }}
            />

            <button
              disabled={assigning || impData.portfolio === "" || impData.committee === ""}
              style={{
                cursor:
                  assigning || impData.portfolio === "" || impData.committee === ""
                    ? "not-allowed"
                    : "cursor",
                opacity:
                  assigning || impData.portfolio === "" || impData.committee === ""
                    ? "0.5"
                    : "1",
              }}
              onClick={handleAssign}
            >
              Assign
            </button>
          </main>
        )}
    </>
  );
};

export default IndividualEventReg;
