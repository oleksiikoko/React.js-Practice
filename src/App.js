import React from "react";
import { Route } from "react-router-dom";

import { DistanceCalculator } from "pages";

import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      {/* <Route exact path={["/", "/login", "/register"]} component={Auth} /> */}
      <Route exact path="/calculator" component={DistanceCalculator} />
    </div>
  );
}

export default App;
