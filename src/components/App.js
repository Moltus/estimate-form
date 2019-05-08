import React from "react";
import FormDisplay from "./FormDisplay";

class App extends React.Component {
  state = { step: 1 };

  render() {
    return <FormDisplay step={this.state.step} />;
  }
}

export default App;
