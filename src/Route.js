import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./Login";

function MyRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/quiz/:name" component={App} />
      </Switch>
    </Router>
  );
}

export default MyRoute;