/* eslint-disable no-console */
import React, { useContext } from "react";
import { UserContext } from "../../Context/ContextProv";

const About = () => {
  const { profile, segments } = useContext(UserContext);
  console.log("Profile", profile);
  console.log("Segments", segments);

  return (
    <main>
      <h1>About</h1>
    </main>
  );
};

export default About;
