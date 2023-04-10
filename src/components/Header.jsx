import React, { useState, useEffect, useContext, useRef } from "react";
import './Styles/header.css'

import { Theme } from "../Contexts/Theme";
import { LanguageContext } from "../Contexts/Language";

import dataPT from '../JsonLanguage/pt.json';
import dataEN from '../JsonLanguage/en.json';

function Header() {

    // FUNCTION SWITCH THEME
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

    // FUNCTION SCROLL
    function scroll(ref) {
        document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    }
    function scrollTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    // //////////SWITCH LANGUAGE//////////// 
    const [data, setData] = useContext(LanguageContext)
    const [language, setLanguage] = useState('en');
    const handleLanguageChange = () => {
        if (language === 'en') {
            setLanguage('pt');
            setData(dataPT);
        } else {
            setLanguage('en');
            setData(dataEN);
        }
    }

    // ////////MENU MOBILE/////////

    const [menuIsActive, setMenuIsActive] = useState(false);
    const menuRef = useRef(null)

    function toggleMenu() {
        setMenuIsActive(!menuIsActive)
    }


    return (
        <header id="headerContainer">
            <div id="logo">
                <a onClick={() => scrollTop()}>
                    <img src={isWhiteMode ? "./logoBlack.png" : "./logoWhite.png"} alt="Checkbox" />
                </a>
            </div>
            {/* <nav id="navFora" > */}
                <nav id="menu" className={menuIsActive ? "active" : ""} ref={menuRef}>
                    <li><a onClick={() => scrollTop()}>{data.headertitle}</a></li>
                    <li><a onClick={() => scroll('aboutMeLink')}>{data.headerAboutme}</a></li>
                    <li><a onClick={() => scroll('skillsLink')}>{data.headerSkills}</a></li>
                    <li><a onClick={() => scroll('projectsLink')}>{data.headerProjects}</a></li>
                    <li><a onClick={() => scroll('footerContainer')}>{data.headerContact}</a></li>
                </nav>
                <div id="buttons">
                    <label id="switchLabel" onChange={handleCheckboxChange}>
                        <input type="checkbox" checked={isWhiteMode} />
                        <img src={isWhiteMode ? "./moonIcon.png" : "./sunIcon.png"} alt="Checkbox" />
                    </label>
                    <button onClick={handleLanguageChange}><img src={language === 'en' ? "./br.png" : "./eua.png"}></img></button>

                    <button id="btn-mobile" onClick={toggleMenu}><img src={isWhiteMode ? "./hamburguerBlack.png" : "./hamburguerWhite.png"} alt="" /></button>
                </div>
            {/* </nav> */}
        </header>
    )
}

export default Header;