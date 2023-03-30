import React from "react";
import './header.css'

function Header() {
    
    function scroll(ref) {
        document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    }
    function scrollTop(){
        window.scrollTo({top:0,left: 0, behavior: "smooth"})
    }
    return (
        <div id="headerContainer">
            <div id="logo">
                <a onClick={() => scrollTop()}>
                    <img src="./logofelipe2.png"></img>
                </a>
            </div>
            <ul id="menu">
            <li><a onClick={() => scrollTop()}>Home</a></li>
                {/* <li><a onClick={() => scroll('homeContainer')}>Home</a></li> */}
                <li><a onClick={() => scroll('aboutMeLink')}>About me</a></li>
                <li><a onClick={() => scroll('skillsLink')}>Skills</a></li>
                <li><a onClick={() => scroll('projectsLink')}>Projects</a></li>
                <li><a onClick={() => scroll('footerContainer')}>Contact</a></li>
            </ul>
            <div id="buttons">
                <button><img src="./sunIcon.png"></img></button>
                <button><img src="./br.png"></img></button>
            </div>
        </div>
    )
}


export default Header;