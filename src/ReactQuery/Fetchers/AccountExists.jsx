/* eslint-disable no-console */
import axios from "axios";

export const accountExists = async ({ email }) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}/accounttest/${email}`
    );
    const ifAccountExistsData = res.data;
    return ifAccountExistsData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
