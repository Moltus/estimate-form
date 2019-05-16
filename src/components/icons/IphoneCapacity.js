import React from "react";
import "./IphoneCapacity.css";

const IphoneCapacity = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.44 27.44"
      className="question-icon"
    >
      <title>iphone-capacity</title>
      <g id="iphone">
        <path
          id="capacity-case"
          className="capacity-case"
          d="M10.68,20.26V7.14a1,1,0,0,1,1-1h9.16V2.49A1.92,1.92,0,0,0,19,.57H7.88A1.92,1.92,0,0,0,6,2.49V25a1.92,1.92,0,0,0,1.92,1.92H19A1.91,1.91,0,0,0,20.88,25V21.3H11.72A1,1,0,0,1,10.68,20.26Z"
        />
      </g>
      <g className="capacities">
        <rect
          id="capacity-high"
          className="capacity-high"
          x="11.91"
          y="7.16"
          width="12.52"
          height="3.54"
          rx="0.66"
        />
        <rect
          id="capacity-mid"
          className="capacity-mid"
          x="11.91"
          y="11.85"
          width="10.74"
          height="3.54"
          rx="0.66"
        />
        <rect
          id="capacity-low"
          className="capacity-low"
          x="11.93"
          y="16.54"
          width="9.26"
          height="3.54"
          rx="0.66"
        />
      </g>
    </svg>
  );
};

export default IphoneCapacity;
