import React from "react";

const getIconURL = iconName => {
  return `./icons/${iconName}.svg`;
};
const Icons = props => {
  return (
    <div className="icon-container">
      <img
        className="question-icon"
        src={getIconURL(props.iconName)}
        alt={props.iconName}
      />
    </div>
  );
};

export default Icons;
