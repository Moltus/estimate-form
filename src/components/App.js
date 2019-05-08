import React from "react";
import FormDisplay from "./FormDisplay";

class App extends React.Component {
  state = { currentStep: 1 };

  render() {
    return <FormDisplay step={this.state.currentStep} />;
  }
}

export default App;
