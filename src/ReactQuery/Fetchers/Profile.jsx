/* eslint-disable no-console */
import axios from "axios";

export const fetchProfile = async () => {
  try {
    // const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/dashboard`)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const profileData = res.data;
    return profileData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
