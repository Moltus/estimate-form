import "./FormDisplay.css";
import React from "react";
import FormData from "./FormData";
import Icons from "./Icons";
import ButtonList from "./ButtonList";

class Form extends React.Component {
  state = { question: "", subQuestion: "", choices: [], icon: "" };
  animation = "";

  componentDidMount() {
    this.getNextStep();
  }
  getNextStep() {
    this.animation = "slide-left-in";
    this.getStepData();
  }
  getStepData() {
    const data = FormData["step" + this.props.step];
    this.setState({
      question: data.question,
      subQuestion: data.subQuestion ? data.subQuestion : "",
      choices: data.choices,
      icon: data.icon
    });
  }

  getAnswer = choice => {
    this.props.onButtonClick(choice);
    this.animation = "slide-left-out";
    setTimeout(() => {
      this.getNextStep();
    }, 500);
  };

  render() {
    console.log(this.state);

    return (
      <div id="form-container" className={"form-container " + this.animation}>
        <Icons iconName={this.state.icon} />
        <h3 className="question">{this.state.question}</h3>
        <h4 className="sub-question">{this.state.subQuestion}</h4>
        <ButtonList choices={this.state.choices} getAnswer={this.getAnswer} />
      </div>
    );
  }
}
export default Form;
