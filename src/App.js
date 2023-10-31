import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./Routes/MainRoute";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
};

export default App;
