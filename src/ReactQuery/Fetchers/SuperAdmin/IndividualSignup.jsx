/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchAllIndividualSignup = async ({ accountID }) => {
  try {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/superadmin/getprofile/${accountID}`,
      tokenConfig
    );
    const individualProfileData = res.data;
    return individualProfileData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
