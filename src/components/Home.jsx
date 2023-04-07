import React, {useContext} from "react";
import './home.css'

import { LanguageContext } from "../Language";



function Home() {

    const [data, setData] = useContext(LanguageContext)
    // scroll
    function scroll(ref) {
        document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <div id="homeContainer">
                <div className="textContainer ">
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
                <div className="imageContainer">
                    <div className="image">
                        <img src="./mainImage.png"></img>
                    </div>
                </div>
            </div>
            <div id="aboutMeLink" className="arrowContainer">
                <a onClick={() => scroll('aboutMeLink')}><img src="./arrowDown.gif"></img></a>
            </div>
        </div>
    );
}

export default Home;