import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {
    return (
        <div className="aboutMe" id="aboutMe">
            <h2>Sobre mi</h2>
            <div className="textContainer">
                <p>
                    Además de mis gustos por el desarrollo, toda la vida he sido <span>músico, productor musical y Dj</span> trabajé durante muchos años por
                    Buenos Aires y temporadas de verano tocando para miles de personas en discotecas de Florianopolis, Brasil.{" "}
                </p>
                <p>
                    Como productor llevo vendidas más de 500 canciones hasta el momento, sin embargo hace algunos años que el desarrollo web se fué convirtiendo
                    en unas de mis principales <span>pasiones</span>.
                </p>
            </div>
            <div className="imgContainer">
                <img src="./imgs/brasil.jpg" alt="" />
            </div>
        </div>
    );
};

export default AboutMe;
