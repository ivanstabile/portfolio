import React, { useState } from "react";
import "./App.css";
import HeroContainer from "./Components/HeroContainer/HeroContainer";
import Navbar from "./Components/NavBar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Components/themes/themes";
import Projects from "./Components/Projects/Projects";

const StyledApp = Styled.div`
    color: ${(props) => props.theme.fontColor};
`;

function App() {
    const [theme, setTheme] = useState("light");
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                <Navbar themeToggler={themeToggler} />
                <HeroContainer />
                <AboutMe />
                <Projects />
                <Footer />
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
