import React, { Component } from "react";
import "../../style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import API from "../../utils/API";

//import IconButton from 'material-ui/IconButton';
//import NavigationClose from 'material-ui/svg-icons/navigation/close';
import image from '../../images/write.jpg';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

//import RaisedButton from 'material-ui/RaisedButton';
import Goalsfollowing from "../../components/Goalsfollowing";
//import Nav from "../../components/Nav";
import Goalsearchform from "../../components/Goalsearchform";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const color = {
  backgroundColor: '#00b4ce'
}

//const color2 = {
//  backgroundColor: '#A9A9A9'
//
//}

class Search extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      open: false,
      category: "",
      description: ""
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


  handleInputChange = (e) => {
    this.setState({category: e.target.value});
  }
 
  handleFormSubmit = event => {
    event.preventDefault();
    this.UserSearch()
  };
   
  UserSearch = () => {

    API.getGoalsCategory(this.state.category)        
    .then(res => {
      console.log("UserSearch data "+JSON.stringify(res.data))
      } // end .then
    )
    .catch(err => {
      console.log("UserSearch "+err+" "+JSON.stringify(err.response.data))
    })
  }

  render() {
    return (
    <MuiThemeProvider>
    <AppBar
      title="Progression"
      onLeftIconButtonClick={this.handleOpen}
      onRightIconButtonClick={this.handleClick}
    />
    <Drawer open={this.state.open} close={this.handleClose}>
      <a href="/Signup"><MenuItem>Signup</MenuItem></a>
      <a href="/Login"><MenuItem>Login</MenuItem></a>
      <a href="/Userhome"><MenuItem>Userhome</MenuItem></a>
      <a href="/Home"><MenuItem>Main Home Page</MenuItem></a>
      <a href="/Search"><MenuItem>Logout</MenuItem></a>
      <MenuItem onClick={this.handleClose}>X Close Menu</MenuItem>
    </Drawer>
    <div style={stylejumbo} className="jumbotron">
     <h1> Collaborate with others with a similar goal!</h1>
      <Goalsearchform
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        description={this.state.description}
        category={this.state.category}
      />
      </div>
      <br/>
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
