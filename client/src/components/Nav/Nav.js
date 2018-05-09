import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  handleLoginButton = (e) =>{
    e.preventDefault();
   window.location="/login"
  }
 handleSignupButton=()=>{
    window.location="/signup"
  }
  
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

  render(){
    return(
    <AppBar
    title="Progression"
    // onLeftIconButtonClick={handleClick}
    // iconElementRight={rightButtons}
    // onRightIconButtonClick={handleClick}
    >
    <div>
    <Tabs>
            <Tab label="Sign Up" to="/signup" onClick={this.handleLoginButton}/>
            <Tab label="Log In"  to="/login"onClick={this.handleSignupButton}/>
        </Tabs>
    </div>
    </AppBar>
    
    )
  }
}




