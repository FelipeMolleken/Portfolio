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

                    </div>
                    <div className="project">

                    </div>
                    <div className="project">

                    </div>
                </div>
                <div className="bottom">
                    <div className="project">

                    </div>
                    <div className="project">

                    </div>
                    <div className="project">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;