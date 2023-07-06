import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import MainModule from "./Main/Main.js";
import MainGood from "./Main/MainGood.js";
import MainHome from "./Main/MainHome.js";

const Components = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={MainHome} />
        <Route path="/main" component={MainModule} />
        <Route path="/user/:firstname/:lastname" component={MainGood} />
        <Redirect to="/main" />
      </Switch>
    </Router>
  );
};

export default Components;