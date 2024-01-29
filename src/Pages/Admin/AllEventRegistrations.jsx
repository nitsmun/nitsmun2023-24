/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AllEventRegistrations = () => {
  useEffect(() => {
    document.title = "All Event Registrations | NITSMUN";
  }, []);
  const allEvents = ["Annual Conference 2024", "annualConference2024"];

  return (
    <>
      <h1>All Events({allEvents?.length})</h1>
      {allEvents?.length > 0 &&
        allEvents?.map((item) => {
          return (
            <div key={item?._id}>
              <Link to={`/registrations/${item}`}>{item}</Link>
            </div>
          );
        })}
    </>
  );
};

export default AllEventRegistrations;
