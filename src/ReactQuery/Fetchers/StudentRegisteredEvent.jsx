/* eslint-disable no-console */
import axios from "axios";
import Cookies from "js-cookie";

export const fetchAllStudentRegistrations = async () => {
  try {
    const token = Cookies.get("authToken");
    const tokenConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/client/allevents`,
      tokenConfig
    );
    const studentEventRegs = res.data;
    return studentEventRegs;
  } catch (err) {
    console.error(err);
    return null;
  }
};
