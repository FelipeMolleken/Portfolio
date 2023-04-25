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
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Portfólio</h2>
                                <p>Descrição: <br></br> React, Components, Hooks, Javascript, Context API, CSS, HTML, white mode, change language e versão mobile.</p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./memoryJs.png" alt="" />
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Memory Game JS</h2>
                                <p>Descrição: <br></br>React, Javascript, </p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./todoReact.png" alt="" />
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Todo React</h2>
                                <p>Descrição: <br></br> React, Javascript, </p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./todoReact2.png" alt="" />
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Todo React</h2>
                                <p>Descrição: <br></br> React, Javascript, </p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="project">
                        <img src="./rocketpay.png" alt="" />
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Rocketpay</h2>
                                <p>Descrição: <br></br> React, Javascript, </p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./memoryReact.png" alt="" />
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Memory Game React</h2>
                                <p>Descrição: <br></br> React, Javascript, </p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="./ufc.png" alt="" />
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Landing Pages UFC</h2>
                                <p>Descrição: <br></br> React, Javascript, </p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <img src="./cover.png" alt="" />
                        <div className="infos">
                            <div className="textInfo">
                                <h2>Controlador de Hábitos</h2>
                                <p>Descrição: <br></br> React, Javascript, </p>
                            </div>
                            <div className="buttonCard">
                                <a href="">Open</a>
                                <a href="">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;