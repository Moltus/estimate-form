import "../styles/FormDisplay.css";
import React from "react";
import FormData from "./FormData";
import Icons from "./Icons";
import ButtonList from "./ButtonList";
import ProgressGauge from "./ProgressGauge";

class Form extends React.Component {
  state = { question: "", subQuestion: "", choices: [], icon: "" };
  animation = "";

  componentDidMount() {
    this.getNextStep();
  }
  getPreviousStep() {
    this.animation = "slide-right-in";
    this.getStepData();
  }
  getNextStep() {
    this.animation = "slide-left-in";
    this.getStepData();
  }
  getStepData() {
    const data = FormData["step" + this.props.currentStep];
    this.setState({
      question: data.question,
      subQuestion: data.subQuestion ? data.subQuestion : "",
      choices: data.choices,
      icon: data.icon
    });
    console.log(this.state);
  }

  onBackClick = () => {
    this.props.getBack();
    this.animation = "slide-right-out";
    setTimeout(() => {
      this.getPreviousStep();
    }, 500);
  };

  getAnswer = choice => {
    this.props.onButtonClick(choice);
    this.animation = "slide-left-out";
    setTimeout(() => {
      this.getNextStep();
    }, 500);
  };

  render() {
    return (
      <div>
        <ProgressGauge
          onBackClick={this.onBackClick}
          currentStep={this.props.currentStep}
        />
        <div id="form-container" className={"form-container " + this.animation}>
          <Icons iconName={this.state.icon} />
          <h3 className="question">{this.state.question}</h3>
          <h4 className="sub-question">{this.state.subQuestion}</h4>
          <ButtonList choices={this.state.choices} getAnswer={this.getAnswer} />
        </div>
      </div>
    );
  }
}
export default Form;
