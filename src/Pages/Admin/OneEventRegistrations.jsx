/* eslint-disable no-underscore-dangle */
import React, { useContext, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { UserContext } from "../../Context/ContextProv";
import { fetchAllRegistrationsInAnEvent } from "../../ReactQuery/Fetchers/Admin/GetRegisteredEvents";

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
  // console.log(particularEventRegistrations);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <>
      <h1>
        {event}&#39;s Registrations ({particularEventRegistrations?.length})
      </h1>
      <main>
        <h1>All registrations irrespective of status : </h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations?.map((item, index) => {
            return (
              <div key={item?._id}>
                <h2>{index + 1}</h2>
                <Link to={`/eventreg/${item._id}`}>
                  <p>{item?.name}</p>
                </Link>
              </div>
            );
          })}

        <h1>All registrations with the status &quot;pending&quot;</h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.status === "pending")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <h2>{index + 1}</h2>
                  <Link to={`/eventreg/${item._id}`}>
                    <p>{item?.name}</p>
                  </Link>
                </div>
              );
            })}

        <h1>All registrations with the status &quot;confirmed&quot;</h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.status === "confirmed")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <h2>{index + 1}</h2>
                  <Link to={`/eventreg/${item._id}`}>
                    <p>{item?.name}</p>
                  </Link>
                </div>
              );
            })}

        <h1>All registrations with the status &quot;declined&quot;</h1>
        {particularEventRegistrations?.length > 0 &&
          particularEventRegistrations
            ?.filter((item) => item?.status === "declined")
            ?.map((item, index) => {
              return (
                <div key={item?._id}>
                  <h2>{index + 1}</h2>
                  <Link to={`/eventreg/${item._id}`}>
                    <p>{item?.name}</p>
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
