/* eslint-disable no-underscore-dangle */
import React from "react";
import { Link } from "react-router-dom";

const AllEventRegistrations = () => {
  const allEvents = ["conference2024", "youthParliament", "diplomat"];

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
