import React, { Component } from "react";
import "../../style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import image from '../../images/sun.jpg';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import RaisedButton from 'material-ui/RaisedButton';
import Goalform from "../../components/Goalform";
import Goalheader from "../../components/Goalheader";
import Goalsfollowing from "../../components/Goalsfollowing";
import axios from "axios";
// import Nav from "../../components/Nav";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const color = {
  backgroundColor: '#00b4ce'
}

const color2 = {
  backgroundColor: '#A9A9A9'
}

function handleClick(e) {
  e.preventDefault();
}


class UserHome extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      description: "",
      category: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
  };

  getGoals = () => {
    axios.get("/api/goals",{
      description: this.state.description,
      category: this.state.category
    })
      .then(res =>
        this.setState({
          description: res.data,
          category: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getGoals();
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

      <div style={stylejumbo} className="jumbotron">
        <h1>Set Your Goals!</h1>
        <p>Congratulations on taking the first step!</p>
        <p> You are one step closer to your goal!</p>

        <Goalform 
        handleInputChange={this.handleInputChange}
        hangleFormSubmit={this.handleFormSubmit}
        description={this.state.description}
        category={this.state.category}
        />

      </div>
      <Goalheader />
      <Card style={color} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Goal Name"
          subtitle="Exercise"
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
          {this.state.description}
          My goal is to exercise daily
        </CardText>
        </Card>
        <br />
        <Goalsfollowing />
        <div>
          <Card style={color2} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title="Goal Name"
            subtitle="Diet"
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
        <CardTitle title="Goal Title" subtitle="Diet" expandable={true} />
        <CardText expandable={true}>
          My goal is to eat more fruits and vegetables.
        </CardText>
      </Card>
      <br />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default UserHome;
