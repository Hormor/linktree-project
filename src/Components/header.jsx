import React from "react";
import image from "./images/image.jpg"

export default function Header() {
  return (
    <div className="header">
      <img src={image}  alt="omolade's image" id="profile_img" />
      <p id="twitter">Hassan Omolade1</p>
      <p id="slack">Hormor</p>
    </div>
  );
}
