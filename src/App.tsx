import React from "react";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <LaunchList />
      <LaunchProfile />
    </div>
  );
};

export default App;
