/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable check-file/filename-naming-convention */
/* eslint-disable check-file/folder-naming-convention */
import React from "react";
<<<<<<< HEAD:src/Components/app/App.jsx
import Letter from "../Letters/Letters";
import Nitsmun from "../WhatIsMUN/NitsMun";
import "./App.css"
import Footer from "../Footer/Footer";
=======
import Letter from "./componets/letters";
import Nitsmun from "./componets/nitsMun";
import "./App.css";
import Footer from "./componets/Footer";
>>>>>>> c8ebd5a2064cefa00945cf7afd134e5f549b0225:src/Components/app/App.js

const App = () => {
  return (
    <div>
      <div className="letter-container">
        <Letter
          title="Secratory General"
          name="Maruf Padaya"
          src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703446281/image_1_3_azcue6.png"
        />
        <Letter
          title="Faculty Advisor"
          name="Dr. Wasim Arif"
          src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703446281/image_1_3_azcue6.png"
        />
      </div>
      <Nitsmun />
      <Footer />
    </div>
  );
};

export default App;
