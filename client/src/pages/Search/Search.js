import React, { Component } from "react";
import "../../style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import image from '../../images/write-593333_1920.jpg';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import RaisedButton from 'material-ui/RaisedButton';
import Goalsfollowing from "../../components/Goalsfollowing";
import Nav from "../../components/Nav";
import Goalsearchform from "../../components/Goalsearchform";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const color = {
  backgroundColor: '#00b4ce'
}

const color2 = {
  backgroundColor: '#A9A9A9'
}


class Search extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: !this.state.open});
  }
  
  handleClose = () => {
    this.setState({open: false});
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
    <MuiThemeProvider>
    <AppBar
    title="Progression"
    onLeftIconButtonClick={this.handleOpen}
    onRightIconButtonClick={this.handleClick}
    />
    <Drawer open={this.state.open} close={this.handleClose}>
     <a href="/Userhome"><MenuItem>Userhome</MenuItem></a>
     <a href="/About"><MenuItem>About</MenuItem></a>
     <MenuItem onClick={this.handleClose}>Close Menu</MenuItem>
    </Drawer>
    <div style={stylejumbo} className="jumbotron">
      <h1>Search Goals</h1>
      <Goalsearchform/>

      </div>
      <h2 id="header2">Goal Search Results</h2>
      <Card style={color} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Goal Name"
          subtitle="Fitness"
          avatar={image}
          actAsExpander={false}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label=""
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={false}
        > 
        </CardMedia>
        
        <CardTitle title="Goal Title" subtitle="Fitness" expandable={true} />
        <CardText expandable={true}>
          My goal is to increase the amount of daily exercise.
        </CardText>
        </Card>
        <br />

    </MuiThemeProvider>
    );
  }
}

export default Search;
