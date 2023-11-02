"use client";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    //-ms-overflow-style: none;
    //scrollbar-width: none;
    //&::-webkit-scrollbar {
    //  display: none;
    //}
  }

  body {
    min-height: 100vh;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Global;
