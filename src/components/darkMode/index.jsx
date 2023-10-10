import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../../images/Sun.svg";
import { ReactComponent as Moon } from "../../images/Moon.svg";
import "./styles.css";

const DarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"))

    function toggleTheme() {
        (theme === "dark") ? setTheme("light") : setTheme("dark")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="theme-switch-checkbox">
                <input 
                    type="checkbox" 
                    id="theme-switch-checkbox" 
                    onChange={toggleTheme} 
                    checked={theme === "dark"} 
                />
                <div className="slider round">
                    <Sun />
                    <Moon />
                </div>
            </label>
        </div>
    )
}

export default DarkMode;