import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [profile, setProfile] = useState([]);
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_REACT_APP_API}/dashboard`).then((res) => {
        setProfile(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_REACT_APP_API}/segments`).then((res) => {
        setSegments(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const contextValue = useMemo(() => ({ profile, segments }), [profile, segments]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { ContextProvider, UserContext };
