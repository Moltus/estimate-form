import "../styles/History.css";
import React from "react";
import FormData from "./FormData";

class History extends React.Component {
  // passed step information when user click on a previous step in history
  onClickedItem = (event, step) => {
    this.props.onClickedItem(step);
  };

  // gets info and id for each step up to current one from FormData.js obj
  getHistory() {
    let Inputs = [];
    for (let i = 0; i < this.props.history.length; i++) {
      const data = FormData["step" + (i + 1)];
      Inputs.push(
        <p
          onClick={event => this.onClickedItem(event, i)}
          className="history-question"
          key={data.id}
        >
          {data.question}
          <span className="history-answer"> {this.props.history[i]}</span>
        </p>
      );
    }
    return Inputs;
  }

  render() {
    return (
      <div className="history-container">
        <div className="history">{this.getHistory()}</div>
      </div>
    );
  }
}

export default History;
