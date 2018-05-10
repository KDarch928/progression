import React, { Component } from "react";
import "./style.css";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Userhome from './pages/Userhome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fileupload from "./pages/Fileuploader";
import About from "./pages/About";

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import Search from './pages/Search';
import Toggle from 'material-ui/Toggle';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Nav from "./components/Nav"


function handleClick(e) {
  e.preventDefault();
  window.location.replace("./search");
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};


const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white'
};

const rightButtons = (
  <div>
    <FlatButton label="Sign Up" style={buttonStyle} to="/Search">
    </FlatButton>
    <FlatButton label="Log In" style={buttonStyle} to="/Userhome" />
  </div>
);

const App = () => (

  <Router>
    <div>
      <MuiThemeProvider>
        <AppBar
          title="Progression"
          onTitleClick={handleClick}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={rightButtons}
          onRightIconButtonClick={handleClick}
        />

      </MuiThemeProvider>
      <Switch>
        <Route exact path="/" component={Userhome} />
        <Route exact path="/userhome" component={Userhome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/upload" component={Fileupload} />
      </Switch>
    </div>
  </Router>

);

export default App;
