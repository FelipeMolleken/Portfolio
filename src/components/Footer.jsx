import React from "react";
import './footer.css'





function Footer() {
    function scrollTop(){
        window.scrollTo({top:0,left: 0, behavior: "smooth"})
    }
    return (
        <div id="footerContainer">
            <div id="arrowFooter">
                <a onClick={() => scrollTop()}><img id="" src="./FrameG.png"></img><p><b>BACK TO TOP</b></p></a>
            </div>
            <div id="informations">
                <div id="name">
                    <h4><img src="./nameImage2.png" alt="" /> @FelipeMolleken</h4>
                    <p>Front-end developer based in Brazil</p>
                </div>
                <div id="contact">
                    <h2>Contact</h2>
                    <ul>
                        <li><img src="./phoneIcon.png" alt="" />(11)96372-4219</li>
                        <li><img src="./emailIcon.png" alt="" />felipegois_m@hotmail.com</li>
                        <li><img src="./localIcon.png" alt="" />Guarulhos, SP</li>
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
        </div>
    );
}
export default Footer;