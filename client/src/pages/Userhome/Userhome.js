import React, { Component } from "react";
import "../../style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import image from '../../images/wallpaper.jpg';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import RaisedButton from 'material-ui/RaisedButton';
import Goalform from "../../components/Goalform";
/////////////////////
const io = require('socket.io-client')

const socket = io.connect('http://localhost:3000')

function registerHandler(onMessageReceived) {
  socket.on('message', onMessageReceived)
}

function unregisterHandler() {
  socket.off('message')
}

socket.on('error', function (err) {
  console.log('received socket error:')
  console.log(err)
})

function register(name, cb) {
  socket.emit('register', name, cb)
}

function join(chatroomName, cb) {
  socket.emit('join', chatroomName, cb)
}

function leave(chatroomName, cb) {
  socket.emit('leave', chatroomName, cb)
}

function message(chatroomName, msg, cb) {
  socket.emit('message', { chatroomName, message: msg }, cb)
}

function getChatrooms(cb) {
  socket.emit('chatrooms', null, cb)
}

function getAvailableUsers(cb) {
  socket.emit('availableUsers', null, cb)
}








////////////////////////////
const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

function handleClick(e) {
  e.preventDefault();
}


class UserHome extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
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
      <div style={stylejumbo} className="jumbotron">
        <h1>Set Your Goals!</h1>
        <p>Congratulations on taking the first step!</p>
        <p> You are one step closer to your goal!</p>

        <Goalform />

      </div>

      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
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
        
        <div>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
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
