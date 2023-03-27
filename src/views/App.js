import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Testss from "./example/test";
import Testcomponent from "./example/Testcomponent";
/**
 * 2 types component
 * + class component
 * + function component
 *
 */
function App() {
  return (
    <div className="App">
      <Testcomponent />
    </div>
  );
}

export default App;
