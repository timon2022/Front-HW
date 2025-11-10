import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"





const Global = createGlobalStyle`
* {
	padding: 0px;
	margin: 0px;
	box-sizing: border-box;
}
a, a:link, a:visited,a:hover ,  a:active  {
    text-decoration: none;
    color:inherit;
}



ul, ul li {     
	list-style: none;
}
button, input[type="submit"] {

all: unset;
}
input:focus, input:active,
button:focus, button:active {
outline: none;
}

// @font-face {
// font-family: 'MyFontThin';
// src: url('../assets/fonts/Epilogue/static/Epilogue-Thin.ttf') format('truetype');
// }

@import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap');

body {
font-family: 'Epilogue', sans-serif;
color:${theme.colors.secondaryFont};

}








`




export default Global
