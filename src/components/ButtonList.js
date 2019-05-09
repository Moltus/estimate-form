import "./ButtonList.css";
import React from "react";

class ButtonList extends React.Component {
  getAnswer = (event, id) => {
    this.props.getAnswer(id);
  };

  getButtons() {
    const containerClass =
      this.props.choices.length > 4
        ? "buttons-container small-buttons"
        : "buttons-container";

    const buttons = this.props.choices.map(({ id, button, info }) => {
      return (
        <div key={id} className="button-and-info">
          <button
            className="button"
            onClick={event => this.getAnswer(event, id)}
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
