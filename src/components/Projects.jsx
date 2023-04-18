import React, { useContext } from "react";
import './Styles/projects.css'
import { LanguageContext } from "../Contexts/Language";

function Projects() {
    const [data, setData] = useContext(LanguageContext)
    return (
        <div id="projectsContainer">
            <div className="title">
                <h1><span>{data.ProjectsTitle1}</span>{data.ProjectsTitle2}</h1>
            </div>
            <div className="projectsMenu">
                <div className="top">
                    <div className="project">
                        <img src="./portfolioCard.png" alt="" />
                    </div>
                    <div className="project">
                        <img src="./memoryJs.png" alt="" />
                    </div>
                    <div className="project">
                        <img src="./todoReact.png" alt="" />
                    </div>
                    <div className="project">
                        <img src="./todoReact2.png" alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="project">
                        <img src="./rocketpay.png" alt="" />
                    </div>
                    <div className="project">
                        <img src="./memoryReact.png" alt="" />
                    </div>
                    <div className="project">
                        <img src="./ufc.png" alt="" />
                    </div>
                    
                    <div className="project">
                        <img src="./cover.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;