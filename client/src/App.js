
import React from "react";
// import "./nav.css";
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

const AppBarExampleIcon = () => (

  <MuiThemeProvider>
  <AppBar
    title="Progression"
    onLeftIconButtonClick={handleClick}
    iconElementRight={<FlatButton label="SignUp / Login" />}
    onRightIconButtonClick={handleClick}
  />
  </MuiThemeProvider>

);

export default AppBarExampleIcon;
