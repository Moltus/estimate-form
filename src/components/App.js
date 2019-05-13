import React from "react";
import FormDisplay from "./FormDisplay";

class App extends React.Component {
  state = {
    currentStep: 1,
    answers: [],
    email: ""
  };

  getPreviousStep = () => {
    if (this.state.currentStep !== 1) {
      let updatedAnswers = [...this.state.answers];
      updatedAnswers.splice(this.state.answers.length - 1, 1);
      this.setState({
        currentStep: this.state.currentStep - 1,
        answers: updatedAnswers
      });
    }
  };

  getNextStep = choice => {
    console.log(choice);
    this.setState({
      currentStep: this.state.currentStep + 1,
      answers: [...this.state.answers, choice]
    });
  };

  validateForm = email => {
    this.setState({
      email: email
    });
    console.log(this.state);
  };

  render() {
    console.log(this.state);
    return (
      <div className="estimate-form">
        <FormDisplay
          currentStep={this.state.currentStep}
          history={this.state.answers}
          onButtonClick={this.getNextStep}
          getBack={this.getPreviousStep}
          validate={this.validateForm}
        />
      </div>
    );
  }
}

export default App;
