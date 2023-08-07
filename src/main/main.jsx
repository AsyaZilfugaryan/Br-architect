import React from "react";
import './main.scss'
import imagesData from "../assets/images/images";


function Main() {
    return (
        <div class='main'>
            <img src={imagesData.architect} width="100%" alt="" />
            <p class='text'><span className="br">HR</span >Architect</p>

        </div>
    )
}
export default Main