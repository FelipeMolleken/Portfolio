import React, { useContext } from "react";
import './Styles/home.css'
import { Theme } from "../Contexts/Theme";
import { LanguageContext } from "../Contexts/Language";



function Home() {

    const [data, setData] = useContext(LanguageContext)
    const [isWhiteMode, setIsWhiteMode] = useContext(Theme)

    // FUNCTION SCROLL
    function scroll(ref) {
        document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <div id="homeContainer">
                <div className="textContainer ">
                    <div className="textBox">
                        <div className="title">
                            <h1>{data.homeTitle1}<span>{data.homeTitle2}<br>
                            </br>{data.homeTitle3}</span>{data.homeTitle4}<span>{data.homeTitle5}<br>
                            </br>{data.homeTitle6}</span></h1>
                        </div>
                        <div className="subTitle">
                            <h4>{data.homeSubtitle1}<br></br>{data.homeSubtitle2}</h4>
                        </div>
                        <div className="contactButton">
                            <button onClick={() => scroll('footerContainer')}>{data.homebutton1}</button>
                            <button id="downloadBtn">Download CV</button>
                        </div>
                    </div>
                </div>

                <div className="imageContainer">
                    <div className="image">
                        <img src={data.mainImg}></img>
                    </div>
                </div>
            </div>
            <div id="aboutMeLink" className="arrowContainer">
                <a onClick={() => scroll('aboutMeLink')}><img src={isWhiteMode ? "./arrowDownBlack.png" : "./arrowDown.gif"}></img></a>
            </div>
        </div>
    );
}

export default Home;