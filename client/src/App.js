import React, { Component } from "react";
import "./style.css";
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Userhome from './pages/Userhome';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import NavBar from "./components/Nav"
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
import Home from "./pages/Home"

//injectTapEventPlugin();
// function handleClick(e) {
 
// }
// function handleLoginButton = () =>{
//   window.location="/login"
// }
// function handleSignupButton=()=>{
//   window.location="/signup"
// }

// const styles = {
//   title: {
//     cursor: 'pointer',
//   },
// };


// const buttonStyle = {
//   backgroundColor: 'transparent',
//   color: 'white'
// };

// const rightButtons = (
//   <div>
//     <FlatButton label="Sign Up" style={buttonStyle} to="/signup">
//     </FlatButton>
//     <FlatButton label="Log In" style={buttonStyle} to="/login" />
//   </div>
// );


const App = () => (
 <Router>
    
    <div>
   
  <MuiThemeProvider>
    
    <NavBar/>
    


  </MuiThemeProvider>

  <Switch>
    
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/Signup" component={Signup}/>
    <Route exact path="/" component={Home} /> 
  
   
    </Switch>

    
    </div>
 </Router> 
);

export default App;
