/////////////////////////////////////////////////////////
// client/src/AppRouter.js                M Jordan
/////////////////////////////////////////////////////////
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Goalform from "./components/Goalform"
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Goalform} />
        <Route exact path="/goals" component={Goalform} />
      </Switch>
    </div>
  </Router>
);

export default App;