import React, { useState, useEffect, useContext } from "react";
import './Styles/header.css'

import { Theme } from "../Contexts/Theme";
import { LanguageContext } from "../Contexts/Language";

import dataPT from '../JsonLanguage/pt.json';
import dataEN from '../JsonLanguage/en.json';


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

    // //////////SWITCH LANGUAGE//////////// 
    
    const [data, setData] = useContext(LanguageContext)
// const [data, setData] = useState(dataEN);

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
 

 // ////////////////////// TESTE

    return (
        <div id="headerContainer">
            <div id="logo">
                <a onClick={() => scrollTop()}>
                    <img src={isWhiteMode ? "./logoBlack.png" : "./logoWhite.png"} alt="Checkbox" />
                </a>
            </div>
            <ul id="menu">
            
                <li><a onClick={() => scrollTop()}>{data.headertitle}</a></li>
                <li><a onClick={() => scroll('aboutMeLink')}>{data.headerAboutme}</a></li>
                <li><a onClick={() => scroll('skillsLink')}>{data.headerSkills}</a></li>
                <li><a onClick={() => scroll('projectsLink')}>{data.headerProjects}</a></li>
                <li><a onClick={() => scroll('footerContainer')}>{data.headerContact}</a></li>
            </ul>

            <div id="buttons">
                <label id="switchLabel" onChange={handleCheckboxChange}>
                    <input type="checkbox" checked={isWhiteMode} />
                    <img src={isWhiteMode ? "./moonIcon.png" : "./sunIcon.png"} alt="Checkbox" />
                </label>

                <button onClick={handleLanguageChange}><img src={language === 'en' ?  "./br.png" : "./eua.png"}></img></button>

            </div>
        </div>
    )
}

export default Header;