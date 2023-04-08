import React, { useContext } from "react";
import './Styles/aboutMe.css'

// import { LanguageContext } from "../Language";
import { LanguageContext } from "../Contexts/Language";

function AboutMe() {
    const [data, setData] = useContext(LanguageContext)
    return (
        <div id="aboutMeContainer">
            <div className="title">
                <h1><span>{data.aboutmetitle1}</span>{data.aboutmetitle2}</h1>
            </div>
            <div className="presentationContainer">
                <div className="presentation">
                    <div className="photo">
                        <img src="./profile.png" alt="" />
                    </div>
                    <div className="aboutMeText">
                        <h2>Felipe Gois Molleken</h2>
                        <div className="text">
                            <p>
                                {data.aboutmeText1}<br></br>
                                {data.aboutmeText2}<br></br>
                                {data.aboutmeText3}<br></br>
                                {data.aboutmeText4}<br></br>
                                {data.aboutmeText5}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skillsLink" className="personalData">
                <div>
                    <img src="./point.png" alt="" />
                    <h4>{data.aboutmeDataName}</h4>
                    <p>Felipe Gois Molleken</p>
                </div>
                <div>
                    <img src="./point.png" alt="" />
                    <h4>{data.aboutmeDataEmail}</h4>
                    <p>felipegois_m@hotmail.com</p>
                </div>
                <div>
                    <img src="./point.png" alt="" />
                    <h4>Github</h4>
                    <p>@felipemolleken</p>
                </div>
                <div>
                    <img src="./point.png" alt="" />
                    <h4>{data.aboutmeDataPhone}</h4>
                    <p>(11)963724219</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;