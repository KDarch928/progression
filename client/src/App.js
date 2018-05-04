import React, { Component } from "react";
import "./style.css";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import image from './images/sun.jpg';
import RaisedButton from 'material-ui/RaisedButton';
import Goalform from "./components/Goalform";

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}



const AppBarExampleIconButton = () => (
<MuiThemeProvider>
  <AppBar
    title="Progression"
    onLeftIconButtonClick={handleClick}
    iconElementRight={<FlatButton label="SignUp / Login" />}
    onRightIconButtonClick={handleClick}
  />
<div style={stylejumbo} className="jumbotron">
<h1>Set Your Goals!</h1>
<p>Congratulations on taking the first step!</p>
<p> You are one step closer to your goal!</p>
  <Goalform />
  </div>

 </MuiThemeProvider>
);

export default AppBarExampleIconButton;
