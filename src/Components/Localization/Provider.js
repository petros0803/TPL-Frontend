import React from "react";
import Context from "./Context";
import { languagesArray } from "../../Constants/Languages/Languages";

export class Provider extends React.Component {
  state = {
    language: languagesArray[1], //Default selected language
  };

  actions = () => ({
    changeLanguage: (language) => this.setState({ language }),
  });

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: this.actions(),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
