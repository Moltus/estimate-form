import React from "react";
import FormDisplay from "./FormDisplay";
import ProgressGauge from "./ProgressGauge";

class App extends React.Component {
  state = {
    currentStep: 1,
    answers: []
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
        <ProgressGauge currentStep={this.state.currentStep} />
        <FormDisplay
          step={this.state.currentStep}
          onButtonClick={this.getNextStep}
        />
      </div>
    );
  }
}

export default App;
