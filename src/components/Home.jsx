import React from "react";
import './home.css'

function Home() {
    // scroll
    function scroll(ref) {
        document.getElementById(ref).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <div id="homeContainer">
                <div className="textContainer ">
                    <div className="title">
                        <h1>Felipe is a <span>front-end<br></br> developer</span> and <span>business <br></br>student</span></h1>
                    </div>
                    <div className="subTitle">
                        <h4>Seeking your first job opportunity in the <br></br> technology field</h4>
                    </div>
                    <div className="contactButton">
                        <button onClick={() => scroll('footerContainer')}>Contact me !!</button>
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