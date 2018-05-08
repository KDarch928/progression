import React, { Component } from "react";
import "./style.css";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Userhome from './pages/Userhome';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fileupload from "./pages/Fileuploader";

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import Search from './pages/Search';


function handleClick(e) {
  e.preventDefault();
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
    <FlatButton label="Sign Up" style={buttonStyle} to="/">
    </FlatButton>
    <FlatButton label="Log In" style={buttonStyle} to="/" />
  </div>
);


const App = () => (
  // <MuiThemeProvider>
    
  //   <AppBar
  //   title="Progression"
  //   onLeftIconButtonClick={handleClick}
  //   iconElementRight={rightButtons}
  //   onRightIconButtonClick={handleClick}
  //   />

  //   {/* <Userhome /> */}

  // </MuiThemeProvider>
  <Router>
    <div>
      <MuiThemeProvider>
    
        <AppBar
          title="Progression"
          onLeftIconButtonClick={handleClick}
          iconElementRight={rightButtons}
          onRightIconButtonClick={handleClick}
        />

      </MuiThemeProvider>
      <Switch>
        <Route exact path="/" component={Userhome} />
        <Route exact path="/userhome" component={Userhome} />
        <Route exact path="/upload" component={Fileupload} />
      </Switch>
    </div>
  </Router>
);

export default App;
