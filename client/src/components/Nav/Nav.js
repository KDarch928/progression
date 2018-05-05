import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function handleClick(e) {
  e.preventDefault();
}


const AppBarExampleIcon = () => (

    <MuiThemeProvider>
    
    <AppBar
    title="Progression"
    onLeftIconButtonClick={handleClick}
    onRightIconButtonClick={handleClick}
    />

  </MuiThemeProvider>
);

export default AppBarExampleIcon;


