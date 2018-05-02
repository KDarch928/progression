import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const App = () => (
  <Router>
    
    <div>
    <MuiThemeProvider>
    <AppBar
    title="Progression"
    onLeftIconButtonClick={handleClick}
    iconElementRight={<FlatButton label="SignUp / Login" />}
    onRightIconButtonClick={handleClick}
    />
    </MuiThemeProvider>
   
    <Switch>
    
    <Route path="/Login" component={Login}/>
    <Route path="/Signup" component={Signup}/>
    <Route path="/" component={Home} />
  
    
    </Switch>
    </div>
  </Router>
);

export default App;
