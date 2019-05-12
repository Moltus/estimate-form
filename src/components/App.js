import React from "react";
import FormDisplay from "./FormDisplay";

class App extends React.Component {
  state = {
    currentStep: 1,
    answers: []
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

  render() {
    console.log(this.state);
    return (
      <div className="estimate-form">
        <FormDisplay
          currentStep={this.state.currentStep}
          onButtonClick={this.getNextStep}
          getBack={this.getPreviousStep}
        />
      </div>
    );
  }
}

export default App;
