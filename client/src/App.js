import React, { Component } from "react";
import "./style.css";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Userhome from './pages/Userhome';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import NavBar from "./components/Nav"

import Fileupload from "./pages/Fileuploader";
import About from "./pages/About";

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
// import MenuItem from 'material-ui/MenuItem';
import Login from "./pages/Login";
import Signup from "./pages/Signup"
//import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import Home from "./pages/Home"
import Search from './pages/Search';
import Toggle from 'material-ui/Toggle';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Nav from "./components/Nav"

//injectTapEventPlugin();
function handleClick(e) {
  e.preventDefault();
  window.location.replace("./Login");
}
// function handleLoginButton = () =>{
//   window.location="/login"
// }
// function handleSignupButton=()=>{
//   window.location="/signup"
// }


const App = () => (

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/userhome/" component={Userhome} />
        <Route exact path="/category/:keyword" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/upload" component={Fileupload} />
        <Route exact path="/Login" component={Login}/>
    <Route exact path="/Signup" component={Signup}/>
      </Switch>
    </div>
  </Router>

);

export default App;
