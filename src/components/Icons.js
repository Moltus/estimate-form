import React from "react";
import "../styles/Icons.css";
import IphoneModel from "./icons/IphoneModel";
import IphoneCapacity from "./icons/IphoneCapacity";
import IphoneScreen from "./icons/IphoneScreen";
import IphoneFunctional from "./icons/IphoneFunctional";
import IphoneCase from "./icons/IphoneCase";
import IcloudDisconnect from "./icons/IcloudDisconnect";
import Mail from "./icons/Mail";

class Icons extends React.Component {
  // Load icon Components based on 'icon' property in FormData obj passed on in props.iconTag
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
    const TagName = this.components[this.props.iconTag || "IphoneModel"];
    console.log("icon tag is : ", TagName);
    return <TagName />;
  }
}

export default Icons;
