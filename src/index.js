import React from "react";
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import './css/theme/styles.css';
import App from "./App";

const Index = () => {
  return <div>
      <App />
      </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));