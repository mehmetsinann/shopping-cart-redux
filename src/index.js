import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";

ReactDOM.render(
  <React.Fragment>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
