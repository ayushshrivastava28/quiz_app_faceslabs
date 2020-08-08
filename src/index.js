import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Route from "./Route";

ReactDOM.render(<Route />, document.getElementById("root"));
registerServiceWorker();
