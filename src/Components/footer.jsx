import React from "react";
import zuri from "./images/zuri-img.png";
import i4g from "./images/i4g.png";

export default function Footer() {
  return (
    <div id="footer">
      <div id="main-footer">
        <img src={zuri} alt="Zuri's Internship image" id="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img
          src={i4g}
          alt="I4G image"
          id="i4g" />
      </div>
    </div>
  );
}
