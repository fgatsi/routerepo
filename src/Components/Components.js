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


// Kickoff solution
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import MainList from "./Main/MainList.js";

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={MainList} />}
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}


