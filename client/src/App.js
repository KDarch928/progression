import React from 'react';

import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
<Router>
  <div>
    <Switch>
    <Route path="/" component={Home} />
    
  </Switch>
  </div>
</Router>
);

export default App;
