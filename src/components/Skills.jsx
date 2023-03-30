import React from "react";
import './skills.css'

function Skills() {
    return (
        <div id="skillsContainer">
            <div className="title">
                <h1><span>S</span>kills</h1>
            </div>
            <div className="techsSkills">
                <h2>Technologies and soft skills</h2>
                <p>My techs:</p>
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
                <p>My soft skills:</p>
                <div className="softs">
                    <div className="skills1">
                        <div className="charisma">
                            <h2>CHARISMA</h2>
                            <p>I am very kind and attentive, positively impacting my work environment, communication and coexistence with the team is more efficient, bringing a very pleasant environment.</p>
                        </div>
                        <div className="dedication">
                            <h2>DEDICATION</h2>
                            <p>I like to show potential by delivering my best result, I always try to evolve and overcome myself, being very dedicated.</p>
                        </div>
                    </div>
                    <div className="skills2">
                        <div className="proactivity">
                            <h2>PROACTIVITY</h2>
                            <p>I seek to solve all the problems around me and I always look for more effective and simpler ways to do tasks, processes and work that are passed on to me.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="projectsLink" className="imageTechsContainer">
                <img src="./Skills (2).png" alt="" />
            </div>
        </div>
    )
}

export default Skills;
