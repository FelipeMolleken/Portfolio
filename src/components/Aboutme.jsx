import React from "react";
import './aboutMe.css'

function AboutMe() {
    return (
        <div id="aboutMeContainer">
            <div className="title">
                <h1><span>A</span>bout me</h1>
            </div>
            <div className="presentationContainer">
                <div className="presentation">
                    <div className="photo">
                        <img src="./profile.png" alt="" />
                    </div>
                    <div className="aboutMeText">
                        <h2>Felipe Gois Molleken</h2>
                        <div className="text">
                            <p>Hello, I'm an enthusiast in the field of front-end development.<br></br>
                                Daily I'm improving my skills to get my first opportunity as a React<br></br> Developer.<br></br>
                                I'm in my last year of business school. If I could point out my main<br></br>
                                qualities they would be: dedicated, proactive and charismatic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skillsLink" className="personalData">
                <div>
                    <img src="./point.png" alt="" />
                    <h4>Full Name</h4>
                    <p>Felipe Gois Molleken</p>
                </div>
                <div>
                    <img src="./point.png" alt="" />
                    <h4>Email address</h4>
                    <p>felipegois_m@hotmail.com</p>
                </div>
                <div>
                    <img src="./point.png" alt="" />
                    <h4>Github</h4>
                    <p>@felipemolleken</p>
                </div>
                <div>
                    <img src="./point.png" alt="" />
                    <h4>Phone</h4>
                    <p>(11)963724219</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;