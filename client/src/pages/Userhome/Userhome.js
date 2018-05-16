import React, { Component } from "react";
import "../../style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import image from '../../images/wallpaper.jpg';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import RaisedButton from 'material-ui/RaisedButton';
import Goalform from "../../components/Goalform";
import Goalheader from "../../components/Goalheader";
import Goalsfollowing from "../../components/Goalsfollowing";
import axios from "axios";
// import Nav from "../../components/Nav";

// const socket = io.connect('http://localhost:3000')

// function registerHandler(onMessageReceived) {
//   socket.on('message', onMessageReceived)
// }

// function unregisterHandler() {
//   socket.off('message')
// }

// socket.on('error', function (err) {
//   console.log('received socket error:')
//   console.log(err)
// })

// function register(name, cb) {
//   socket.emit('register', name, cb)
// }

// function join(chatroomName, cb) {
//   socket.emit('join', chatroomName, cb)
// }

// function leave(chatroomName, cb) {
//   socket.emit('leave', chatroomName, cb)
// }

// function message(chatroomName, msg, cb) {
//   socket.emit('message', { chatroomName, message: msg }, cb)
// }

// function getChatrooms(cb) {
//   socket.emit('chatrooms', null, cb)
// }

// function getAvailableUsers(cb) {
//   socket.emit('availableUsers', null, cb)
// }








// ////////////////////////////
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
      open: false,
      description: "",
      category: "",
      defaultimg: "start.jpeg",
      file: null,
      awsbaseurl: "https://progressionapp.s3.amazonaws.com/",
      result: null

    };
  }


  handleOpen = () => {
    this.setState({open: !this.state.open});
  }
  
  handleClose = () => {
    this.setState({open: false});
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

  uploadFile = (file, signedRequest, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', signedRequest);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                alert(`File has succesfully uploaded!`);
            } else {
                alert('Could not upload file.');
            }
        }
    };
    xhr.send(file);
  }

  getSignedRequest = (file) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/sign-s3?file-name=${file.name}&file-type=${file.type}`);
    // xhr.open('GET', `/api/sign-s3`);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText);
                this.uploadFile(file, response.signedRequest, response.url);
            } else {
                alert('Could not get signed URL.');
            }
        }
    };
    xhr.send();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.file !== null){
      if(this.state.file == null){
        return alert("No file selected.");
      }

      this.getSignedRequest(this.state.file);
    }

    console.log()
    this.getGoals();
  };

  fileChangeHandler = event => {
    this.setState({file:event.target.files[0]}) 
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
      <a href="/Signup"><MenuItem>Signup</MenuItem></a>
      <a href="/Login"><MenuItem>Login</MenuItem></a>
      <a href="/Search"><MenuItem>Search</MenuItem></a>
      <a href="/Home"><MenuItem>Main Home Page</MenuItem></a>
      <a href="/Userhome"><MenuItem>Logout</MenuItem></a>
      <MenuItem onClick={this.handleClose}>X Close Menu</MenuItem>
    </Drawer>

      <div style={stylejumbo} className="jumbotron">
        <h1>Set Your Goals!</h1>
        <p>Congratulations on taking the first step! You are one step closer to your goal!</p>

        <Goalform 
        handleInputChange={this.handleInputChange}
        hangleFormSubmit={this.handleFormSubmit}
        description={this.state.description}
        category={this.state.category}
        file={this.fileChangeHandler}
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
