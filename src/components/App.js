import React from "react";
import FormDisplay from "./FormDisplay";

class App extends React.Component {
  state = {
    currentStep: 1,
    answers: [],
    email: ""
  };

  goToStep = step => {
    let updatedAnswers = [...this.state.answers];
    updatedAnswers.splice(step, this.state.currentStep - step + 1);
    this.setState({
      currentStep: step + 1,
      answers: updatedAnswers
    });
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
    this.setState({
      currentStep: this.state.currentStep + 1,
      answers: [...this.state.answers, choice]
    });
  };

  validateForm = email => {
    this.setState({
      email: email
    });
  };

  render() {
    return (
      <div className="estimate-form">
        <FormDisplay
          currentStep={this.state.currentStep}
          history={this.state.answers}
          onClickHistory={this.goToStep}
          onButtonClick={this.getNextStep}
          getBack={this.getPreviousStep}
          validate={this.validateForm}
        />
      </div>
    );
  }
}

export default App;
