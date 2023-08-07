import React from "react";
import './staffBlock.scss'


const StaffBlock = (props) => {
    return (
        <div className="staff-block">
            <img src={props.img} width='100%'alt=""  />
            <h3 className="staff-name">{props.name} </h3>
            <p className="prof">{props.prof}</p>
            <p className="desc">{props.desc}</p>
            <button className="stuff-button">Contact</button>
        </div>
    )


}

export default StaffBlock