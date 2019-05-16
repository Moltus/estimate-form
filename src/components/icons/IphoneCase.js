import React from "react";
import "./IphoneCase.css";

const IphoneCase = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.44 27.44"
      className="question-icon"
    >
      <title>iphone-case</title>
      <g className="iphone-case">
        <path
          className="iphone-case__case"
          d="M19.29.48H8.15A1.93,1.93,0,0,0,6.23,2.41V25A1.93,1.93,0,0,0,8.15,27H19.29A1.94,1.94,0,0,0,21.22,25V2.41A1.94,1.94,0,0,0,19.29.48Zm.48,20.36"
        />
        <rect
          className="iphone-case__screen"
          x="7.67"
          y="3.74"
          width="12.1"
          height="17.1"
        />
        <path
          className="iphone-case__button"
          d="M13.72,25.05A1.23,1.23,0,1,1,15,23.82,1.23,1.23,0,0,1,13.72,25.05Z"
        />
        <path
          className="iphone-case__speaker"
          d="M11,1.66h5.5c.14,0,.25.2.25.46s-.11.46-.25.46H11c-.14,0-.25-.2-.25-.46S10.83,1.66,11,1.66Z"
        />
      </g>
    </svg>
  );
};

export default IphoneCase;
