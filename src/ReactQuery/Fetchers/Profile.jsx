/* eslint-disable no-console */
import axios from "axios";

export const fetchProfile = async () => {
  try {
    // // const res = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/dashboard`)
    // const res = await axios.get(`http://localhost:3880/v1/api/dashboard`);
    const res = await axios.get("http://localhost:3880/v1/api/dashboard", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTljNTFhM2I2YjJmZGU1ODM1NDQyMzIiLCJlbWFpbCI6ImJhcm5pbHNhcm1hQGdtYWlsLmNvbSIsImlhdCI6MTcwNDc0Mzc5NCwiZXhwIjoxOTYzOTQzNzk0fQ.1J2VYIRTPG-EytGxaGetCGRElpFD3B6ibQmu3Q6awEU"
      }
    });
    const profileData = res;
    return profileData;
  } catch (err) {
    console.error(err);
    return null;
  }
};
