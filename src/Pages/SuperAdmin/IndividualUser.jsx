/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useMemo, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { UserContext } from "../../Context/ContextProv";
import { fetchAllCreatedAccounts } from "../../ReactQuery/Fetchers/SuperAdmin/GetAllSignups";

const IndividualUser = () => {
  const { id } = useParams();
  const accountID = id;
  const token = Cookies.get("authToken");
  const tokenConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const navigate = useNavigate();

  // fetch individual user details
  const { role, isLoggedIn } = useContext(UserContext);

  const isEnabled = useMemo(() => {
    return Boolean(isLoggedIn && role === "superadmin");
  }, [isLoggedIn, role]);

  const queryKey = useMemo(() => ["allCreatedAccountData"], []);

  const { data, error, isLoading } = useQuery(queryKey, fetchAllCreatedAccounts, {
    enabled: isEnabled,
  });

  const individualUser = data?.allAccounts?.find((user) => user._id === accountID);
  console.log(individualUser);
  useEffect(() => {
    document.title = `${individualUser?.name} | NITSMUN}`;
    if (role !== "superadmin") {
      navigate("/");
    }
  }, [individualUser, role, navigate]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  // elevate role
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
            window.location.reload();
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

  // demote role
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
            window.location.reload();
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

  // delete user

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
      <h1>{individualUser?.name}</h1>
      {individualUser.role === "client" && (
        <div>
          <button onClick={handleElevate}>Elevate Role</button>
        </div>
      )}

      {individualUser.role === "admin" && (
        <div>
          <button onClick={handleDemote}>Demote Role</button>
        </div>
      )}

      <div>
        <button onClick={handleDelete}>Delete account</button>
      </div>
    </div>
  );
};

export default IndividualUser;
