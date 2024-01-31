/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const VerifyEmail = () => {
  const { token } = useParams();
  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(true);
  // console.log(token)
  useEffect(() => {
    const verifyEmail = async () => {
      await axios
        .put(`${import.meta.env.VITE_REACT_APP_API}/verifytoken/${token}`)
        .then((res) => {
          if (res.data.message === "Email verified successfully") {
            setVerified(true);
            setVerifying(false);
            toast(
              "Email verified successfully, redirecting to registration page after 2sec or alternatively you can go to applynow page to register for the Annual Conference 2024",
              {
                duration: 10000,
              }
            );
            setTimeout(() => {
              window.location.href = "/registration";
            }, 2500);
          }
        })

        .catch((err) => {
          setVerified(false);
          setVerifying(false);
          if (err.response) {
            switch (err.response.data.error) {
              case "email already verified":
                toast("email already verified");
                break;
              case "Server Error":
                toast("Server Error");
                break;
              case "Token is missing":
                toast("Token is missing");
                break;
              case "User not found":
                toast("User not found");
                break;
              case "token expired. please try again later":
                toast("token expired. please try again later");
                break;
              default:
                toast("something went wrong");
                break;
            }
          }
        });
    };

    verifyEmail();
  }, [token]);
  if (verifying === true) {
    return (
      <main>
        <div className="veriyfing..."></div>
      </main>
    );
  }

  return (
    <div>
      {verified === true ? (
        <h1>
          Email verified...redirecting to event registration page after 2 seconds...
        </h1>
      ) : (
        <h1>Somehting went wrong</h1>
      )}
    </div>
  );
};

export default VerifyEmail;
