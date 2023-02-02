import React from "react";
import './home.css'

function Home() {
    return (
        <div>
            <div className="homeContainer">
                <div className="textContainer ">
                    <div className="title">
                        <h1>Felipe is a <span>front-end<br></br> developer</span> and <span>business <br></br>student</span></h1>
                    </div>
                    <div className="subTitle">
                        <h4>Seeking your first job opportunity in the <br></br> technology field</h4>
                    </div>
                    <div className="contactButton"><button>Contact me !!</button></div>
                    <div className="contactButton"><button>Download CV</button></div>
                </div>
                <div className="imageContainer">
                    <div className="image">
                        <img src="./Group46.png"></img>
                    </div>
                </div>
            </div>
            <div className="arrowContainer">
                <a href="aboutme"><img src="./arrowDown.gif"></img></a>
            </div>
        </div>
    );
}




export default Home;