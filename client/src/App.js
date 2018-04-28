
<<<<<<< HEAD
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
=======
import React from "react";
// import "./nav.css";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const AppBarExampleIcon = () => (

  <MuiThemeProvider>
  <AppBar
    title="Progression"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
    </MuiThemeProvider>

>>>>>>> aa555b877378a5b0ed7046425b29087af21d4cd3
);

export default AppBarExampleIcon;
