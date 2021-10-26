import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGrinBeam } from "react-icons/fa";
import "./heroContainer.scss";

const HeroContainer = () => {
    return (
        <div className="heroContainer">
            <div className="textContainer">
                <h1>
                    Hola, soy <span>Iván</span>
                </h1>
                <p>Front-end Web Developer</p>
                <div className="iconSections">
                    <a href="https://www.linkedin.com/in/ivanstabile/" target="_blank">
                        <FaLinkedin className="iconItems" />
                    </a>
                    <a href="https://github.com/ivanstabile">
                        <FaGithub className="iconItems github" />
                    </a>
                </div>
            </div>
            <div className="imgContainer">
                <img src="./imgs/ivanstabile.jpg" alt="ivan stabile" />
            </div>
        </div>
    );
};

export default HeroContainer;
