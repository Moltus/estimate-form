import React from "react";
import "../styles/ProgressGauge.css";

class ProgressGauge extends React.Component {
  circularGauge = () => {
    return (
      <svg
        className="circular-gauge"
        width="80px"
        height="80px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circular-gauge__outline"
          cx="40px"
          cy="40px"
          r="37"
        />
        <circle
          id="gauge-circle"
          className="circular-gauge__progression"
          cx="40px"
          cy="40px"
          r="37"
        />
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
        onClick={this.onBackClick}
      >
        <g className="back-button__circle-arrow">
          <path
            className="back-button__arrow"
            d="M26.63,32.67H43.38a2,2,0,1,0,0-4H26.63v-10l-12,12,12,12Z"
          />
          <circle
            className="back-button__circle"
            cx="30"
            cy="30.67"
            r="24.71"
          />
        </g>
      </svg>
    );
  };

  onBackClick = () => {
    this.props.onBackClick();
  };

  componentDidUpdate() {
    // element dashoffset make full circle at 760 and empties at 1000
    // one step equals (1000-760)/6 = 40 with 6 being nb of steps
    let newOffset = 1000 - (this.props.currentStep - 1) * 40;
    document.getElementById("gauge-circle").style.strokeDashoffset = newOffset;
  }

  render() {
    return (
      <div className="progress">
        {this.circularGauge()}
        {this.backButton()};
      </div>
    );
  }
}

export default ProgressGauge;
