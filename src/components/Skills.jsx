import React, { useContext } from "react";
import './skills.css'
import { LanguageContext } from "../Language";

function Skills() {
    const [data, setData] = useContext(LanguageContext)
    return (
        <div id="skillsContainer">
            <div className="title">
                <h1><span>{data.SkillsTitle1}</span>{data.SkillsTitle2}</h1>
            </div>
            <div className="techsSkills">
                <h2>{data.SkillsSubtitle}</h2>
                <p>{data.SkillsTechs}</p>
                <div className="iconTechs">
                    <div><img src="./icons/React.png" alt="react"></img></div>
                    <div><img src="./icons/Javascript.png" alt="javascript"></img></div>
                    <div><img src="./icons/CSS.png" alt="css"></img></div>
                    <div><img src="./icons/HTML5.png" alt="html"></img></div>
                    <div><img src="./icons/sass.png" alt="sass"></img></div>
                    <div><img src="./icons/git.png" alt="git"></img></div>
                    <div><img src="./icons/Github.png" alt="github"></img></div>
                    <div><img src="./icons/bootstrap.png" alt="bootstrap"></img></div>
                    <div><img src="./icons/bulma.png" alt="bulma"></img></div>
                    <div><img src="./icons/Figma.png" alt="figma"></img></div>
                </div>
                <p>{data.SkillsSoftskills}</p>
                <div className="softs">
                    <div className="skills1">
                        <div className="charisma">
                            <h2>{data.SkillsCharismaTitle}</h2>
                            <p>{data.SkillsCharismaText}</p>
                        </div>
                        <div className="dedication">
                            <h2>{data.SkillsDedicationTitle}</h2>
                            <p>{data.SkillsDedicationText}</p>
                        </div>
                    </div>
                    <div className="skills2">
                        <div className="proactivity">
                            <h2>{data.SkillsProactivityTitle}</h2>
                            <p>{data.SkillsProactivityText}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="projectsLink" className="imageTechsContainer">
                <img src="./Skills.png" alt="" />
            </div>
        </div>
    )
}

export default Skills;
