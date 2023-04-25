import React, { useState, useEffect, useContext } from "react";
import './Styles/footer.css'
import { Theme } from "../Contexts/Theme";
import { LanguageContext } from "../Contexts/Language";

function Footer(props) {

    const [isWhiteMode, setIsWhiteMode] = useContext(Theme)
    const [data, setData] = useContext(LanguageContext)

    // FUNCTION SCROLL
    function scrollTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <footer id="footerContainer">
            <div id="arrowFooter">
                <a onClick={() => scrollTop()}><img src={isWhiteMode ? "./arrowUpBlack.png" : "./arrowUpWhite.png"} alt="Checkbox" /><p><b>{data.FooterArrow}</b></p></a>
            </div>
            <div id="informations">
                <div id="name">
                    <h4><img src={isWhiteMode ? "./footerIconBlack.png" : "./footerIconWhite.png"} alt="" /> @FelipeMolleken</h4>
                    <p>{data.FooterText}</p>
                </div>
                <div id="contact">
                    <h2>{data.FooterContact}</h2>
                    <ul>
                        <li><img src={isWhiteMode ? "./phoneBlack.png" : "./phoneWhite.png"} alt="" />(11)96372-4219</li>
                        <li><img src={isWhiteMode ? "./emailBlack.png" : "./emailWhite.png"} alt="" />felipegois_m@hotmail.com</li>
                        <li><img src={isWhiteMode ? "./localBlack.png" : "./localWhite.png"} alt="" />Guarulhos, SP</li>
                    </ul>
                </div>
            </div>
            <div id="linksButtons">
                <a target="_blank" href="https://www.linkedin.com/in/felipegois/"><img src="./icons/linkedinButton.png" alt="" /></a>
                <a target="_blank" href="https://github.com/FelipeMolleken"><img src="./icons/githubButton.png" alt="" /></a>
            </div>
            <div id="copyright">
                <p>Copyright © Felipe Gois Molleken · 2023</p>
            </div>
        </footer>
    );
}

export default Footer;