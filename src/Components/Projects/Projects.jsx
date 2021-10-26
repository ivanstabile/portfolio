import React from "react";
import "./projects.scss";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h2>Proyectos</h2>
            <div className="projectsContainer">
                <div className="projectsCards">
                    <a href="https://ecstatic-swanson-60880e.netlify.app/" target="_blank">
                        <div className="imgContainer">
                            <img src="./imgs/e-commerce.png" alt="e-commerce react" />
                        </div>
                        <h3 className="cardTitle">E-commerce</h3>
                        <p>hecho con React y Firebase</p>
                    </a>
                    <a href="https://clever-mayer-e72d64.netlify.app/index.html/" target="_blank">
                        <div className="imgContainer">
                            <img src="./imgs/sorterHat.png" alt="e-commerce react" />
                        </div>
                        <h3 className="cardTitle">Sombrero seleccionador Hogwarts</h3>
                        <p>hecho con HTML5, Sass y JS</p>
                    </a>
                    <a href="https://ivanstabile.github.io/clone-pency/" target="_blank">
                        <div className="imgContainer">
                            <img src="./imgs/pency-clone.jpg" alt="e-commerce react" />
                        </div>
                        <h3 className="cardTitle">Clon UI Pency</h3>
                        <p>HTML5 y Sass</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
