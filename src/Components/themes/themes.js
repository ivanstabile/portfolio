import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    body: "#112031",
    fontColor: "#FF4C29",
};

export const lightTheme = {
    body: "#EEEEEE",
    fontColor: "#353556",
};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body}
    }

`;
