import React from "react";
import './header.css'

function Header() {
    return (
        <div className="HeaderContainer">
            <div id="logo">
                <a href="home">
                    <img src="./logofelipe2.png"></img>
                </a>
            </div>

            <ul id="menu">
                <li><a href="home">Home</a></li>
                <li><a href="About me">About me</a></li>
                <li><a href="Skills">Skills</a></li>
                <li><a href="Projects">Projects</a></li>
                <li><a href="Contact">Contact</a></li>
            </ul>
            <div id="buttons">
                <button><img src="./sunIcon.png"></img></button>
                <button><img src="./br.png"></img></button>
            </div>
        </div>
    )
}





export default Header;