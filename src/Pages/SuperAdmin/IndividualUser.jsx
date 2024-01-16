import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";

const IndividualUser = () => {
  const { id } = useParams();
  const accountID = id;
  const token = Cookies.get("authToken");
  const tokenConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleElevate = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(
          `${import.meta.env.VITE_REACT_APP_API}/elevate/admin`,
          { accountID },
          tokenConfig
        )
        .then((res) => {
          if (res.data.message === "Role elevated to admin") {
            toast("Role elevated to admin");
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "No such account exists":
            toast("No such account exists");
            break;
          case "No such role exists":
            toast("No such role exists");
            break;
          case "Not authorized to use this api endpoint":
            toast("Not authorized to use this api endpoint");
            break;
          case "Internal server error":
            toast("Internal server error");
            break;
          default:
            toast("Something went wrong");
        }
      }
    }
  };

  const handleDemote = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(
          `${import.meta.env.VITE_REACT_APP_API}/demote/client`,
          { accountID },
          tokenConfig
        )
        .then((res) => {
          if (res.data.message === "Role demoted to client") {
            toast("Role demoted to client");
          }
        });
    } catch (err) {
      if (err.response) {
        switch (err.response.data.error) {
          case "No such account exists":
            toast("No such account exists");
            break;
          case "No such role exists":
            toast("No such role exists");
            break;
          case "Not authorized to use this api endpoint":
            toast("Not authorized to use this api endpoint");
            break;
          case "Internal server error":
            toast("Internal server error");
            break;
          default:
            toast("Something went wrong");
        }
      }
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios
        .delete(`${import.meta.env.VITE_REACT_APP_API}/superadmin/deleteaccount`, {
          data: { accountID },
          ...tokenConfig,
        })
        .then((res) => {
          if (res.data.message === "User deleted successfully") {
            toast("User deleted successfully");
          }
        });
    } catch (ee) {
      if (ee.response) {
        switch (ee.response.data.error) {
          case "No such account exists":
            toast("No such account exists");
            break;
          case "Only users with the role client can be deleted":
            toast("Only users with the role client can be deleted");
            break;
          case "Not authorized to use this api endpoint":
            toast("Not authorized to use this api endpoint");
            break;
          case "Something went wrong on the server side":
            toast("Something went wrong on the server side");
            break;
          default:
            toast("Something went wrong");
        }
      }
    }
  };

  return (
    <div>
      <h1>IndividualUser</h1>
      <div>
        <button onClick={handleElevate}>Elevate Role</button>
      </div>
      <div>
        <button onClick={handleDemote}>Demote Role</button>
      </div>
      <div>
        <button onClick={handleDelete}>Delete account</button>
      </div>
    </div>
  );
};

export default IndividualUser;
