import React, { Component } from "react";
import "./style.css";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Userhome from './pages/Userhome';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Login from "./pages/Login";
import Signup from "./pages/Signup"
//import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Goalform from "./components/Goalform";
import Drawer from 'material-ui/Drawer';

//injectTapEventPlugin();
function handleClick(e) {
 
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
    <FlatButton label="Sign Up" style={buttonStyle} to="/signup">
    </FlatButton>
    <FlatButton label="Log In" style={buttonStyle} to="/login" />
  </div>
);


const App = () => (
 <Router>
    
    <div>
    <Switch>
    
    <Route path="/Login" component={Login}/>
    <Route path="/Signup" component={Signup}/>
    <Route path="/" component={Userhome} /> 
  
   
    </Switch>
  <MuiThemeProvider>
    
    <AppBar
    title="Progression"
    onLeftIconButtonClick={handleClick}
    iconElementRight={rightButtons}
    onRightIconButtonClick={handleClick}
    />
    


  </MuiThemeProvider>
  <Userhome />

    
    </div>
 </Router> 
);

export default App;
