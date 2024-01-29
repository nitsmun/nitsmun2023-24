/* eslint-disable no-underscore-dangle */
import React, { useContext, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { UserContext } from "../../Context/ContextProv";
import { fetchAllRegistrationsInAnEvent } from "../../ReactQuery/Fetchers/Admin/GetRegisteredEvents";
import styles from "./Styles.module.scss";
const OneEventRegistrations = () => {
  const { role, isLoggedIn } = useContext(UserContext);
  const { event } = useParams();
  const queryKey = useMemo(() => ["RegisteredEventData"], []);
  const isEnabled = useMemo(() => {
    return Boolean(isLoggedIn && role === "admin");
  }, [role, isLoggedIn]);
  const { data, isLoading, error } = useQuery(queryKey, fetchAllRegistrationsInAnEvent, {
    enabled: isEnabled,
  });
  const events = data?.allSuchEvents;
  const particularEventRegistrations = events?.filter(
    (item) => item?.eventName === event
  );
  useEffect(() => {
    document.title = `${event} Registrations | NITSMUN`;
  }, [event]);
  // console.log(particularEventRegistrations);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <>
      <h1>
        {event}&#39;s Registrations ({particularEventRegistrations?.length})
      </h1>
      <main id={styles.fixheight}>
        <h1>All registrations irrespective of status : </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations?.map((item, index) => {
            return (
              <div key={item?._id}>
                <span>{index + 1}.</span>{" "}
                <Link to={`/eventreg/${item._id}`}>
                  <span>{item?.email}</span>
                </Link>
              </div>
            );
          })}

        <h1>All registrations with the status &quot;pending&quot; : </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.status === "pending")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <span>{index + 1}.</span>
                  <Link to={`/eventreg/${item._id}`}>
                    <span>{item?.email}</span>
                  </Link>
                </div>
              );
            })}

        <h1>All registrations with the status &quot;confirmed&quot; : </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.status === "confirmed")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <span>{index + 1}. </span>{" "}
                  <Link to={`/eventreg/${item._id}`}>
                    <span>{item?.email}</span>
                  </Link>
                </div>
              );
            })}

        <h1>All registrations with the status &quot;declined&quot; : </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.status === "declined")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <span>{index + 1}. </span>
                  <Link to={`/eventreg/${item._id}`}>
                    <span>{item?.email}</span>
                  </Link>
                </div>
              );
            })}

        <h1>All registration who have allotted IB: </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.assignedCommittee === "IB")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <span>{index + 1}. </span>
                  <Link to={`/eventreg/${item._id}`}>
                    <span>{item?.email}</span>
                  </Link>
                </div>
              );
            })}
        <h1>All registration who have allotted IPC: </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.assignedCommittee === "IPC")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <span>{index + 1}. </span>
                  <Link to={`/eventreg/${item._id}`}>
                    <span>{item?.email}</span>
                  </Link>
                </div>
              );
            })}
        <h1>All registration who have allotted UNHRC: </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.assignedCommittee === "UNHRC")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <span>{index + 1}. </span>
                  <Link to={`/eventreg/${item._id}`}>
                    <span>{item?.email}</span>
                  </Link>
                </div>
              );
            })}

        <h1>All registration who have allotted Mahabharat: </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.assignedCommittee === "Mahabharat")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <span>{index + 1}. </span>
                  <Link to={`/eventreg/${item._id}`}>
                    <span>{item?.email}</span>
                  </Link>
                </div>
              );
            })}

        <div>
          <Link to="/admin">Go Back</Link>
        </div>
      </main>
    </>
  );
};

export default OneEventRegistrations;
