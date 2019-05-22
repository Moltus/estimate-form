import "../styles/ButtonList.css";
import React from "react";

class ButtonList extends React.Component {
  buttonTexts = [{ id: "0", button: "en chargement", info: "" }];

  componentDidUpdate() {
    this.buttonTexts = this.props.choices;
  }
  // pass on inputed choice to App through FormDisplay
  getAnswer = (event, button) => {
    this.props.getAnswer(button);
  };

  // additional classes for styling when one or >4 buttons
  getButtons() {
    // console.log(this.props.choices);
    let containerClass = "buttons-container";

    // if (this.props.choices && this.props.choices.length > 4) {
    //   containerClass += " small-buttons";
    // } else if (this.props.choices && this.props.choices.length === 1) {
    //   containerClass += " one-button";
    // }
    console.log("buttonTexts : ", this.buttonTexts);
    if (this.buttonTexts.length > 4) {
      containerClass += " small-buttons";
    } else if (this.buttonTexts.length === 1) {
      containerClass += " one-button";
    }

    const buttons = this.buttonTexts.map(({ id, button, info }) => {
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
