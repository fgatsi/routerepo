import React from "react";
import Components from "./Components/Components.js";
import Parse from "parse";
import * as Env from "./environments.js";

function App() {
  return <Components />;
}

export default App;




Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

const App = () => {
  return <Components />;
};

export default App;
