/* eslint-disable no-console */
import React from "react";
import { useParams } from "react-router-dom";

const RegistrationsBasedOnStatus = () => {
  const { status, eventName } = useParams();
  console.log(status);
  console.log(eventName);
  return <div>RegistrationsBasedOnStatus</div>;
};

export default RegistrationsBasedOnStatus;
