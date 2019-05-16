import React from "react";
import "./IphoneScreen.css";

const IphoneScreen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.44 27.44"
      className="question-icon"
    >
      <title>iphone-screen</title>
      <g className="iphone-screen">
        <path
          className="iphone-screen__case"
          d="M19.31.45H8.14A1.93,1.93,0,0,0,6.2,2.38V25.06A1.94,1.94,0,0,0,8.14,27H19.31a1.94,1.94,0,0,0,1.93-1.94V2.38A1.93,1.93,0,0,0,19.31.45Zm.48,20.41"
        />
        <rect
          className="iphone-screen__screen"
          x="7.65"
          y="3.71"
          width="12.14"
          height="17.15"
        />
        <path
          className="iphone-screen__button"
          d="M13.72,25.09A1.24,1.24,0,1,1,15,23.85,1.24,1.24,0,0,1,13.72,25.09Z"
        />
        <path
          className="iphone-screen__speaker"
          d="M11,1.62h5.52c.14,0,.25.21.25.47s-.11.46-.25.46H11c-.14,0-.25-.21-.25-.46S10.82,1.62,11,1.62Z"
        />
      </g>
    </svg>
  );
};

export default IphoneScreen;
