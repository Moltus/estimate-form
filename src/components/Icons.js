import React from "react";
import "../styles/Icons.css";
import IphoneModel from "./icons/IphoneModel";
import IphoneCapacity from "./icons/IphoneCapacity";
import IphoneScreen from "./icons/IphoneScreen";
import IphoneFunctional from "./icons/IphoneFunctional";
import IphoneCase from "./icons/IphoneCase";
import IcloudDisconnect from "./icons/IcloudDisconnect";
import Mail from "./icons/Mail";

// const getIconURL = iconTag => {
//   return `./icons/${iconTag}.svg`;
// };
class Icons extends React.Component {
  components = {
    IphoneModel: IphoneModel,
    IphoneCapacity: IphoneCapacity,
    IphoneScreen: IphoneScreen,
    IphoneFunctional: IphoneFunctional,
    IphoneCase: IphoneCase,
    IcloudDisconnect: IcloudDisconnect,
    Mail: Mail
  };
  render() {
    // const IconTag = this.props.iconTag || "IphoneModel";
    const TagName = this.components[this.props.iconTag || "IphoneModel"];
    console.log("icon tag is : ", TagName);
    return <TagName />;
  }
}

export default Icons;
