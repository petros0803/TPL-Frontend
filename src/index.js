import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import {Provider as LanguageProvider} from "./Components/Localization/Provider";
ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>

    <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
