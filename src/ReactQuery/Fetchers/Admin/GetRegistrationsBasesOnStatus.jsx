/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchRegistrationsBasesOnStatus = async ({ eventName, status }) => {
  try {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/admin/getregs/${eventName}/${status}`,
      tokenConfig
    );
    const statusRegistrationsData = res.data;
    return statusRegistrationsData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
