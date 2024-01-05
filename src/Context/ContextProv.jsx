/* eslint-disable no-console */
import { createContext, useState, useEffect, useMemo } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [role, setRole] = useState("client");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authToken");
    setFetching(false);
    if (fetching === true && token) {
      setIsLoggedIn(true);
    }
  }, [fetching]);

  useEffect(() => {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchRole = async () => {
      await axios
        .get(`${import.meta.env.VITE_REACT_APP_API}/dashboard`, tokenConfig)
        .then((res) => {
          if (res.data) {
            setRole(res.data.role);
          }
        });
    };

    fetchRole();
  }, []);

  const contextValue = useMemo(() => ({ isLoggedIn, role }), [isLoggedIn, role]);

  if (fetching) {
    return null;
  }

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { ContextProvider, UserContext };
