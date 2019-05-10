import React from "react";
import FormDisplay from "./FormDisplay";
import ProgressGauge from "./ProgressGauge";

class App extends React.Component {
  state = {
    currentStep: 1,
    answers: []
  };

  getPreviousStep = () => {
    if (this.state.currentStep !== 1) {
      let updatedAnswers = [...this.state.answers].pop();
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
        <ProgressGauge
          currentStep={this.state.currentStep}
          onButtonClick={this.getPreviousStep}
        />
        <FormDisplay
          step={this.state.currentStep}
          onButtonClick={this.getNextStep}
        />
      </div>
    );
  }
}

export default App;
