import React from "react";
import "./Toggler.scss";

const Toggler = ({ themeToggler }) => {
    return (
        <div>
            <form>
                <input onClick={themeToggler} id="dark-mode" className="toggle" type="checkbox" name="Dark mode" role="switch" value="on" />
                <label for="dark-mode" className="sr">
                    Dark Mode
                </label>
                <div className="curtain"></div>
            </form>
        </div>
    );
};

export default Toggler;
