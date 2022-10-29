import React from "react";
import github from "../assets/images/github.svg";
import slack from "../assets/images/slack.svg";

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