import React, { Component } from "react";
import "../../style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import API from "../../utils/API";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import image from '../../images/wallpaper.jpg';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {Row,Col,Container} from "../../components/Grid"
import {List,ListItem} from "../../components/List";
import RaisedButton from 'material-ui/RaisedButton';
import Goalform from "../../components/Goalform";
import Goalheader from "../../components/Goalheader";
import Goalsfollowing from "../../components/Goalsfollowing";
import axios from "axios";
import Slider from 'material-ui/Slider';
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
      open: false,
      description: "",
      category: "",
      defaultimg: "start.jpeg",
      file: null,
      awsbaseurl: "https://progressionapp.s3.amazonaws.com/",
      result: null,
      goals: [],
      username: "",
      percent: "",
      message: "",
      slider: 10
    };
    this.handleFormSubmit= this.handleFormSubmit.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)
  }

  handleSlider = (event, value) => {
    this.setState({slider: value});
  };

  handleOpen = () => {
    this.setState({open: !this.state.open});
  }
  //////////////
  handleClose = () => {
    this.setState({open: false});
  }
////////////////////
componentDidMount() {
 
 const patharr =  window.location.pathname.split('/');
 const id = patharr[patharr.length-1];
 console.log(id)
 
 this.UserGoals(id)

}
//////////////////////////
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
  };

//////////////////////////////
UserGoals = (id) => {
  console.log("usergoal "+id)
  this.setState({
    username: id
  })

   //console.log(this.state.username)
   API.getGoalsUser(id)        
    .then(res => {

      console.log("Userhome: api getgoaluser "+JSON.stringify(res.data))
      let tmpgoal = res.data[0].goal;
      let tmpdata = [];
      let i = 0
      while ( i < res.data.length ) {

        tmpgoal = res.data[i].goal
        //console.log ( "#1 loop i "+i+" goal "+tmpgoal+" percent "+res.data[i].percent)
        
        if (res.data.length >= 1) 
        {
          
          //console.log("#2 datalength "+res.data.length)
         
          if ( i < res.data.length-1
            && res.data[i+1].goal !== tmpgoal)
            {
              if ( i === 0 ) 
              {
                tmpdata.push(res.data[0])
                tmpgoal = res.data[1].goal;
                console.log("#3 PUSH 0")
               }
              i++;
              continue;         
            }     
            else
              {
                //console.log("#6 before while no tmpdata equal i "+i+" tmpgoal "+tmpgoal+"percent "+res.data[i].percent)
                //console.log(" length "+res.data.length)
                while ( i <= res.data.length && res.data[i].goal === tmpgoal ) //res.data[i+1].goal)
                 {
                   //console.log("#7 --- while before i inc "+i)

                   tmpgoal = res.data[i].goal
                   if ( i >=res.data.length-1)
                     break;
                   i++
                 
                   //if ( i < res.data.length ) 
                   // {    
                   //     console.log("#8 --- while after i inc tmpgoal "+tmpgoal+"percent "+res.data[i].percent)                 
                   //     console.log("#9 *** while no tmpdata equal i "+i+" tmpgoal "+tmpgoal+"percent "+res.data[i].percent)
                   // }
                 } //end while

                 //console.log("#10 %%% --- else after while i "+i +" tmpgoal "+tmpgoal)
               
               if ( i < res.data.length-1)
                i++;
              } // end else
            //if ( i < res.data.length)
            //  console.log("#11 after while goals equal i "+i+" tmpgoal "+tmpgoal+"percent "+res.data[i].percent)
          
            if ( i < res.data.length-1) 
            {
              console.log("#12 PUSH after while push i "+i+" percent "+res.data[i].percent)
              tmpdata.push(res.data[i])
             
              if (i < res.data.length-1) 
              {
               tmpgoal = res.data[i].goal
               //console.log("#13 i "+i+" while goal inc bottom percent "+res.data[i].percent)
              }
            }

        } // end if large

        //console.log("#14 i "+i+" after while before if")
        if ( i < res.data.length) 
         {
            console.log("#15 PUSH after while push i "+i+" "+res.data[i].percent+
            " goal "+res.data[i].goal);
            tmpdata.push(res.data[i])
         }

       if (tmpdata.length > 0)
        {
          console.log("#16 setState "+JSON.stringify(tmpdata))
          this.setState({
           goals: tmpdata
         })
        }      
       i++;
        //console.log("#17 end of while inc i to "+i)
      } // end while
      
      //console.log("#18 after goals data "+JSON.stringify(this.state.goals))

     } // end .then
    )
    .catch(err => console.log(err)) 
 
  }
/////////////////
  handleGoal = (id) => {
  //let id = '5af4912e04f888219c1c00b1'
    console.log("handleGoal id "+JSON.stringify(id))
    // console.log("goals "+this.state.goals)
    API.getGoal(id)
    .then (res => {
        console.log("handleGoal "+JSON.stringify(res.data))
  
        //console.log("handleGoal state "+this.state.displayState); //this.displayState())
        this.setState({
          goals: res.data,
          message: !res.data
            ? "No New Goals Found, Try a Different Goal"
            : "Here is your goal"
        })
      }
      )
      .catch(err => console.log(err)) 
   
  }
///////////////
  getGoals = () => {

    console.log("getGoals")
    axios.get("/api/goals/",{
      description: this.state.description,
      category: this.state.category
    })
      .then(res => {
         console.log("res "+res.data)
        this.setState({
          description: res.data,
          category: res.data
        })

      }
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
    
    const patharr =  window.location.pathname.split('/');
    const id = patharr[patharr.length-1];
    
    console.log(id)

    this.setState({
      username: id
    })
    
    console.log(this.state.username)
    
    console.log("handleFormSubmit")
    //this.getGoals();
    //this.UserGoals()
    console.log(this.state)
    const{username,category,description} = this.state
    API.saveGoal({
      username:this.state.username,
      category:this.state.category,
      description:this.state.description
    })
    .then(res => {
      console.log("apisavegoalworked")
    })
    .catch(err => console.log(err))

    // if (this.state.file !== null){
    //   if(this.state.file == null){
    //     return alert("No file selected.");
    //   }

    //   this.getSignedRequest(this.state.file);
    // }

    // console.log()
    // this.getGoals();
  };

  fileChangeHandler = event => {
    this.setState({file:event.target.files[0]}) 
  };


  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
       // this.handleGoal(id)
//console.log("handleToggle id "+id)
  };

  handleCategory = (event) =>{
    event.preventDefault();
    this.setState({
      category: event.target.value
    })
    console.log(this.state.category)
  }

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
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

          <Goalform 
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          handleCategory={this.handleCategory}
          description={this.state.description}
          category={this.state.category}
          file={this.fileChangeHandler}
          />
      </div>

      <div>
        <List>
              <Goalheader />
          {this.state.goals.map((goal) => (
          <div>
           {/* <p>{goal.category}</p>
            <p>{goal.percent}</p> */}
            <Card style={color} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
              <CardHeader
                title={goal.goal} //"Goal Name"
                subtitle={goal.category} //"Exercise"
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
              
              {/*<CardTitle title="Goal Title" subtitle="Fitness" expandable={true} />*/}        
              <CardTitle title={goal.goal} subtitle={goal.category} expandable={true} />
              <CardText expandable={true}>
                {this.state.description}
                You are at {goal.percent} percent!

        <Slider
          value={this.state.slider}
          onChange={this.handleSlider}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.slider}</span>
        </p>
              </CardText>
            </Card>
           <br />
          </div> 
         ))}
       </List>
   </div>
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
          <Slider />
        </CardText>
      </Card>
      <br />
      </div>

    </MuiThemeProvider>
    );
  }
}

export default UserHome;
