/* eslint-disable no-console */
import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [profile, setProfile] = useState([]);
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, segmentsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_REACT_APP_API}/dashboard`),
          // axios.get(`https://jsonplaceholder.typicode.com/posts`),
          axios.get(`${import.meta.env.VITE_REACT_APP_API}/segments`),
        ]);
        setProfile(profileRes.data);
        setSegments(segmentsRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ profile, segments }), [profile, segments]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export { ContextProvider, UserContext };
