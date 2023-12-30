import React from 'react';
import "./about.css";
// import { RxDragHandleHorizontal } from "react-icons/rx";
import Faq from "../../Components/Pages/Contact/Faq/Faq";
// import Footer from "../../Components/Footer/Footer";
// import Container from './container';

const ABout = () =>{
    return(
        <div className="about">

        
        <div className="banner">
            <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703885689/French_Parliament_Passes_Deep_Sleep_Bill_For_End_Of_Life_1_1_ibex0n.png" alt="banner" />
        </div>
        <div className='container1'>
           <div className="heading">
            <h1>ABOUT US</h1>
           </div>
           <div className="img-text">
           <div className="img">
            <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703886312/modelUN_1_k1qoka.png" alt="img" />
            </div>
            <div className="text">
                <p>NITSMUN aspires to involve youth in international dialogue, deliberate upon the dire issues of the world and shape them into strong individuals who'll become the leaders of tomorrow.International Model United Nations (IMUN) brings youth together from around the world to learn and share ideas from a diverse set of experiences and backgrounds where the Executive board, International Press and International Delegates consolidate to learn about diplomacy, international relations, and the United Nations International Model United Nations (IMUN) brings youth together from around the world to learn and share ideas from a diverse set of experiences and backgrounds where the Executive board, International Press and International Delegates consolidate to learn about diplomacy, international relations, and the United Nations</p>
            </div>
            </div>
        </div>
        <div className='container2'>
           <div className="heading">
            <h1>OUR VISION</h1>
           </div>
           <div className="img-text">
           <div className="img">
            <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703886312/modelUN_1_k1qoka.png" alt="img" />
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.. Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente os praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum</p>
            </div>
            </div>
        </div>
        <div className='container1'>
           <div className="heading">
            <h1>WHAT IS NITSMUN</h1>
           </div>
           <div className="img-text">
           <div className="img">
            <img src="https://res.cloudinary.com/dxcqxo6kl/image/upload/v1703886312/modelUN_1_k1qoka.png" alt="img" />
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.. Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente os praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum</p>
            </div>
            </div>
        </div>
        <div className="objective">
            <h1>OUR OBJECTIVE</h1>
            <Faq />
            {/* <Footer /> */}
        </div>
        </div>
    )
}
export default ABout;
