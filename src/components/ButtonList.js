import "../styles/ButtonList.css";
import React from "react";

class ButtonList extends React.Component {
  // pass on inputed choice to App through FormDisplay
  getAnswer = (event, button) => {
    this.props.getAnswer(button);
  };

  // additional classes for styling when one or >4 buttons
  getButtons() {
    let containerClass = "buttons-container";

    if (this.props.choices.length > 4) {
      containerClass += " small-buttons";
    } else if (this.props.choices.length === 1) {
      containerClass += " one-button";
    }

    const buttons = this.props.choices.map(({ id, button, info }) => {
      return (
        <div key={id} className="button-and-info">
          <button
            className="button"
            onClick={event => this.getAnswer(event, button)}
          >
            {button}
          </button>
          <p className="info">{info}</p>
        </div>
      );
    });

    return <div className={containerClass}>{buttons}</div>;
  }

  render() {
    return this.getButtons();
  }
}

export default ButtonList;
