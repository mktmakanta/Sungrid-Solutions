import React from "react";
import Social from "./Social";

export default function Footer() {
  return (
    <div className="text-white bg-[url('src/images/hero-section/mobile-one.jpg')] bg-blend-darken bg-cover bg-center ">
      <div>
        <h2>for more information please email </h2>
        <div>contactbuttobn</div>
      </div>
      <div>Email</div>
      <div>phone number</div>
      <div>
        <div>Adddress 1</div>
        <div>adrees 2</div>
      </div>
      <div className="brand"></div>
      <div className="copyriht and date">
        COPYRIGHT DATE SUNGRIDSOLUTIONS NIGERIA LIMITED
      </div>
      <div>REGISTERED CAC: 2375275867367</div>
      <Social />
    </div>
  );
}
