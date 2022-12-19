/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react";
import Icon from "../assets/react-icon-small.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img src={Icon} />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
