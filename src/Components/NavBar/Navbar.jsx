import React from "react";
import Toggler from "../Toggler/Toggler";
import "./navBar.scss";

const Navbar = ({ themeToggler }) => {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <a className="navLink" href="#">
                        Ivan Stabile
                    </a>
                    <ul className="navList">
                        <li className="navListItem">
                            <a href="#aboutMe">Sobre mi</a>
                        </li>
                        <li className="navListItem">
                            <a href="#projects">Proyectos</a>
                        </li>
                        <li className="navListItem">
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                    <Toggler className="toggle" themeToggler={themeToggler} />
                </nav>
            </header>
        </>
    );
};

export default Navbar;
