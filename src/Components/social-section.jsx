import React from "react";
import github from "./images/github.png";
import slack from "./images/slack.png";

export default function Socials() {
    return (
      <div id="social-section">
        <img src={slack} alt="slack image" id="socials" />
        <a href="https://github.com/Hormor" target="_blank">
          <img src={github} alt="github link" id="socials" />
        </a>
      </div>
    );
}