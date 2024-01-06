import React from "react";

const Container = props =>{
    <div className="container">
        <div className="heading">
            <h1>{props.name}</h1>
        </div>
        <div className="image-text">
            <div className="img">
            <img src={props.src} alt="img" />
            </div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </div>

    </div>
}
export default Container;
