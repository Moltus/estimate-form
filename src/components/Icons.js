import React from "react";

const getIconURL = iconName => {
  return `../icons/${iconName}.svg`;
};
const Icons = props => {
  return (
    <div className="icon-container">
      <img src={getIconURL(props.icon)} alt={props.icon} />
    </div>
  );
};

export default Icons;
