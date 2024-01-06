/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchProfile = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/dashboard`)
    // const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/dashboard`,
      tokenConfig
    );
    const profileData = res.data;
    return profileData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
