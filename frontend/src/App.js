import React from "react";

import Login from "./Forms/Login";
import Register from "./Forms/Register";
import Router from "./utils/Router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Router />
    </div>
  );
}

export default App;
