import React from "react";
import Letter from "./componets/letters";
import Nitsmun from "./componets/nitsMun";
import "./App.css"
import Footer from "./componets/Footer";

const App = () =>{
  return(
    <div>
      <div className="letter-container" >
       <Letter title="Secratory General" name="Maruf Padaya" src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703446281/image_1_3_azcue6.png"/>
       <Letter title="Faculty Advisor" name="Dr. Wasim Arif" src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703446281/image_1_3_azcue6.png"/>
       </div>
       <Nitsmun/>
       <Footer/>
    </div>
  );
};



export default App;

