import React, { Component} from "react";


import API from "../../utils/API"
import ReactDom from "react-dom"
import "./Signup.css";
import {link} from "react-router-dom"
import axios from "axios";

class Signup extends Component {
  
  constructor(){
    super();
    this.state = {
      username:"",
      password:"",
      email:"",
      firstName:"",
      lastName:""

    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange = (e) => {
    
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  
  onSubmit=(e) => {
    e.preventDefault();
    
    const{ username, password,firstName,lastName, email}= this.state
    console.log(this.state)
    // axios.post("/signup",{ username, password,lastName,firstName,email})
    // .then((result) =>{
    // //   this.props.history.push("/login")
    //   console.log("post happened")
    API.submitSignup({
        //put value from fields here. 
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      .then(res => {
        console.log("response.data: " + res); 
       
        })
      
      .catch(err => console.log(err));

    }
  
  
  
  
  render(){
    // const { userName, password} = this.state;
    return(
      <div id="id01" className="static-modal">
      {/* {span needs onclick}  onClick={props.closeModal}*/}
      <span  className="close" title="Close Modal" >&times;</span>
      <form className="modal-content" onSubmit ={this.onSubmit} >
      <div className="container">
      <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
      <h1> Progression Log In</h1>
      <h2>Sign in to your Progression account to access all your Goal.</h2>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="email"><b>First Name</b></label>
      <input type="text" placeholder="Enter FirstName"onChange={this.onChange}  value ={this.state.firstName} name="firstName"required />
      <label htmlFor="email"><b>Last Name</b></label>
      
      <input type="text" placeholder="Enter Last Name" onChange={this.onChange} value ={this.state.lastName}name="lastName" required />
      
      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" onChange={this.onChange} value ={this.state.email} name="email" required />
      
      <label htmlFor="username"><b>User Name</b></label>
      <input type="text" placeholder="Enter Username" onChange={this.onChange} name="username" value ={this.state.username} required />
      
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" onChange={this.onChange} name="password" value ={this.state.password} required />
      
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" onChange={this.onChange} name="psw-repeat" required />
      
      
      <div className="clearfix">
      {/* {needs onclick on button} onClick={props.closeModal}*/ }
      <button type="button"  className="cancelbtn" to ="/">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
      </div>
      </div>
      </form>
      </div>
    )
  }
};
export default Signup;

