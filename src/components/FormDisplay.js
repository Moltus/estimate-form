import React from "react";
import FormData from "./FormData";
import Icons from "./Icons";
import "./FormDisplay.css";

class Form extends React.Component {
  state = { question: "", subQuestion: "", choices: [], icon: "" };

  componentDidMount() {
    this.getCurrentStep();
  }
  getCurrentStep() {
    const data = FormData["step" + this.props.step];
    console.log(data);
    this.setState({
      question: data.question,
      subQuestion: data.subQuestion ? data.subQuestion : "",
      choices: data.choices,
      icon: data.icon
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="form-container">
        <Icons iconName={this.state.icon} />
        <h3 className="question">{this.state.question}</h3>
        <h4 className="sub-question">{this.statesubQuestion}</h4>
      </div>
    );
  }
}
export default Form;
