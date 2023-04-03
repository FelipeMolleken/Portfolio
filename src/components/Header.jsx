import React, { useState, useEffect, useContext } from "react";
import './header.css'
import { Theme } from "../Theme";


function Header() {

    // functions to switch theme
    const [isWhiteMode, setIsWhiteMode] = useContext(Theme)
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (isWhiteMode) {
            htmlElement.classList.add('white-mode');
        } else {
            htmlElement.classList.remove('white-mode');
        }
    }, [isWhiteMode]);
    function handleCheckboxChange() {
        setIsWhiteMode(!isWhiteMode);
    }

    // functions to scroll
    function scroll(ref) {
        document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    }
    function scrollTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <div id="headerContainer">
            <div id="logo">
                <a onClick={() => scrollTop()}>
                    <img src={isWhiteMode ? "./logoBlack.png" : "./logoWhite.png"} alt="Checkbox" />
                </a>
            </div>
            <ul id="menu">
                <li><a onClick={() => scrollTop()}>Home</a></li>
                <li><a onClick={() => scroll('aboutMeLink')}>About me</a></li>
                <li><a onClick={() => scroll('skillsLink')}>Skills</a></li>
                <li><a onClick={() => scroll('projectsLink')}>Projects</a></li>
                <li><a onClick={() => scroll('footerContainer')}>Contact</a></li>
            </ul>

            <div id="buttons">
                <label id="switchLabel" onChange={handleCheckboxChange}>
                    <input type="checkbox" checked={isWhiteMode} />
                    <img src={isWhiteMode ? "./moonIcon.png" : "./sunIcon.png"} alt="Checkbox" />
                </label>

                <button><img src="./br.png"></img></button>
            </div>
        </div>
    )
}

export default Header;