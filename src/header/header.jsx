import React from "react";
import './header.scss'

function Header() {
    return (
        <div className="header_container">
            <div className="logo_box">
                <a href="" className="links"><span className="logo">BR</span> Architech</a>
            </div>
            <div>
                <a href="" className="links">Projects</a>
                <a href="" className="links">About</a>
                <a href="" className="links">Contact</a>
            </div>
        </div>
    )
}
export default Header   