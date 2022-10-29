import React from "react";
import zuri from "../assets/images/zuri-img.svg";
import i4g from "../assets/images/I4G.png";

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
