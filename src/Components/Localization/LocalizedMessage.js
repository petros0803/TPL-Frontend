import React from "react";

import Localization from "./Localization";
import { string } from "prop-types";
import Context from "./Context";

class UpdateLanguage extends React.Component {
  render() {
    let { of } = this.props;
    return (
      <Context.Consumer>
        {({ state }) => {
          Localization.setLanguage(state.language);
          return Localization[of];
        }}
      </Context.Consumer>
    );
  }
}

UpdateLanguage.propTypes = {
  of: string.isRequired,
};

export default UpdateLanguage;
