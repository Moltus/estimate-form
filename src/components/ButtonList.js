import "./ButtonList.css";
import React from "react";

const ButtonList = props => {
  const containerClass =
    props.choices.length > 4
      ? "buttons-container small-buttons"
      : "buttons-container";
  const buttons = props.choices.map(({ id, button, info }) => {
    return (
      <div key={id} className="button-and-info">
        <button className="button">{button}</button>
        <p className="info">{info}</p>
      </div>
    );
  });

  return <div className={containerClass}>{buttons}</div>;
};

export default ButtonList;
