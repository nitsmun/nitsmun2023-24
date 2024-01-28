/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const [haveVerified, setVerified] = useState();
  const [verifying, setverifying] = useState(false);

  useEffect(() => {
    const emailVerify = () => {
      setverifying(true);
      axios
        .put(`${import.meta.env.VITE_REACT_APP_API}/verifytoken`, { token })
        .then((res) => {
          if (res.data.message === "Email verified successfully") {
            setVerified(true);
            setverifying(false);
          } else {
            setVerified(false);
            setverifying(false);
            console.log(res.data);
          }
        });
    };

    emailVerify();
  }, [token]);
  return (
    <main>
      {verifying ? (
        <h1>Verifying email...</h1>
      ) : (
        <main>
          {haveVerified ? (
            <h1>Email verified successfully</h1>
          ) : (
            <h1>Something went wrong, please try again later</h1>
          )}
        </main>
      )}
    </main>
  );
};

export default VerifyEmail;
