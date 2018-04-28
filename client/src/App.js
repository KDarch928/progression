
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

);

export default AppBarExampleIcon;
