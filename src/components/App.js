import React from "react";
import FormDisplay from "./FormDisplay";

class App extends React.Component {
  state = {
    currentStep: 1,
    answers: [],
    email: ""
  };

  // when user click on history item, to get back n steps ago
  goToStep = step => {
    let updatedAnswers = [...this.state.answers];
    updatedAnswers.splice(step, this.state.currentStep - step + 1);
    this.setState({
      currentStep: step + 1,
      answers: updatedAnswers
    });
  };

  // when user click on back button, for 1 step before
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

  // after an choice button is clicked, get further in form
  getNextStep = choice => {
    this.setState({
      currentStep: this.state.currentStep + 1,
      answers: [...this.state.answers, choice]
    });
  };

  // last step to validate form
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
