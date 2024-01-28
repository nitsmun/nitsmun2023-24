/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchIndividualEventReg = async ({ eventID }) => {
  try {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/admin/reg/${eventID}`,
      tokenConfig
    );
    const individualEventRegData = res.data;
    return individualEventRegData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
