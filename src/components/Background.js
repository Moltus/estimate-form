import "../styles/Background.css";
import React from "react";

class WavyBackground extends React.Component {
  componentDidUpdate() {}
  render() {
    return (
      <div
        className="background"
        style={{ backgroundPositionX: this.props.currentStep * -100 + "px" }}
      />
    );
  }
}

export default WavyBackground;
