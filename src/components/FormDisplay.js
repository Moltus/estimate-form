import "../styles/FormDisplay.css";
import React from "react";
import FormData from "./FormData";
import Icons from "./Icons";
import ButtonList from "./ButtonList";
import ProgressGauge from "./ProgressGauge";
import History from "./History";

class Form extends React.Component {
  state = { question: "", subQuestion: "", choices: [], icon: "" };
  animation = "";
  maxSteps = Object.keys(FormData).length;

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

  onClickHistory = step => {
    this.props.onClickHistory(step);
    this.animation = "slide-right-out";
    setTimeout(() => {
      this.getPreviousStep();
    }, 500);
  };

  getStepData() {
    const data = FormData["step" + this.props.currentStep];
    this.setState({
      question: data.question,
      subQuestion: data.subQuestion ? data.subQuestion : "",
      input: data.input ? "" : undefined,
      choices: data.choices,
      icon: data.icon
    });
  }

  onBackClick = () => {
    this.props.getBack();
    this.animation = "slide-right-out";
    setTimeout(() => {
      this.getPreviousStep();
    }, 500);
  };

  getAnswer = choice => {
    if (this.props.currentStep !== this.maxSteps) {
      this.props.onButtonClick(choice);
      this.animation = "slide-left-out";
      setTimeout(() => {
        this.getNextStep();
      }, 500);
    } else {
      console.log("questionnaire terminé !");
      this.props.validate(this.state.input);
    }
  };

  getSubQuestion = () => {
    if (this.state.subQuestion !== "") {
      return <h4 className="sub-question">{this.state.subQuestion}</h4>;
    }
  };

  getInputMail = () => {
    if (this.state.input !== undefined) {
      return (
        <input
          size="22"
          className="input"
          type="email"
          placeholder="steve.wozniak@apple.com"
          onChange={e => this.setState({ input: e.target.value })}
          value={this.state.input}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <div id="form-container" className="form-container">
          <div className="progress-container">
            <ProgressGauge
              onBackClick={this.onBackClick}
              currentStep={this.props.currentStep}
            />
            <History
              history={this.props.history}
              onClickedItem={this.onClickHistory}
            />
          </div>
          <div className={"questions-container " + this.animation}>
            <Icons iconName={this.state.icon} />
            <h3 className="question">{this.state.question}</h3>
            {this.getSubQuestion()}
            {this.getInputMail()}
            <ButtonList
              choices={this.state.choices}
              getAnswer={this.getAnswer}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
