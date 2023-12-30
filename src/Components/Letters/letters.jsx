import React from "react";
import "./letter.css"

const Letter = props =>{
    return(
        <div className="letter">
        <div className="main">
        <div className="header">
        <h1>Letters From {props.title}</h1>
        </div>      

        <div className="pera">
        <div className="text-image-container">
        <img src={props.src} alt="sec-gen" />  
            <div>
        <p className="pera-heading">Dear Delegates, respected Faculty Advisors, and the Secretariat</p>
        <p>Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic     molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel qu voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima  et dolor galisum. </p>
          </div>  
        </div>
        <p>Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.</p>
        <p>Lorem ipsum dolor sit amet. A nisi nobis sed quia sapiente hic voluptas quos ut dolorem rerum sed quae animi hic molestiae corrupti. Ea nisi maiores et internos praesentium et ipsa omnis est maiores repudiandae eos aspernatur pariatur et libero illo? Vel quis aliQui delectus unde cum dolor aliquid eum deleniti dolore. Vel quibusdam tempora hic voluptas quam et nemo quibusdam et explicabo voluptas eos earum quaerat ea dignissimos minima et dolor galisum.</p>
        </div>
        </div>
        <div className="footer">
        <p>Warm Regards</p>
        <p>{props.name} </p>
        <p>{props.title}</p>
        <p>NITS MUN</p>
        </div>
        </div>
    );
};
export default Letter;