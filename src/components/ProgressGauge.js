import React from "react";
import "./ProgressGauge.css";

class ProgressGauge extends React.Component {
  circularGauge = () => {
    return (
      <svg
        className="circular-gauge"
        width="80px"
        height="80px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40px" cy="40px" r="38" />
      </svg>
    );
  };

  backButton = () => {
    return (
      <svg
        className="back-button"
        width="60px"
        height="60px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="circle-arrow">
          <path d="M26.63,32.67H43.38a2,2,0,1,0,0-4H26.63v-10l-12,12,12,12Z" />
          <circle cx="30" cy="30.67" r="24.71" />
        </g>
      </svg>
    );
  };
  render() {
    return (
      <div className="progress">
        {this.circularGauge()}
        {/* <img
          className="back-button"
          src="./icons/backwards.svg"
          alt="back button"
          width="50px"
        /> */}
        {this.backButton()};
      </div>
    );
  }
}

export default ProgressGauge;
