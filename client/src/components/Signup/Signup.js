import React from "react";
import ReactDom from "react-dom"
import "./Signup.css";
import {link} from "react-router-dom"
import axios from "axios";
import API from "../utils/API"

class Signup extends Component {
  
  constructor(){
    super();
    this.state = {
      username:"",
      password:""
    }
  }
  
  onChange = (e) => {
    
    const state= this.state
    state[e.target.name] = e.targe.value;
    this.setState(state)
  }
  
  onSubmit=(e) => {
    e.preventDefault();
    
    //const{ username, password}= this.state

        //make post rquest here to /login
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




    // axios.post("api/auth/register",{ username, password})
    // .then((result) =>{
    //   this.props.history.push("/login")
    })
  }
  
  
  
  render(){
   
    return(
      <div id="id01" className="staic-modal">
      {/* {span needs onclick} */}
      <span  className="close" title="Close Modal" onClick={props.closeModal}>&times;</span>
      <form className="modal-content" action="/action_page.php" onSubmit ={this.onSubmit}>
      <div className="container">
      <img src="" alt="Avatar" className="avatar"/>
      <h1> Progression Log In</h1>
      <h2>Sign in to your Progression account to access all your Goal.</h2>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="email"><b>First Name</b></label>
      <input type="text" placeholder="Enter FirstName" name="firstName" required />
      
      <label htmlFor="email"><b>Last Name</b></label>
      <input type="text" placeholder="Enter Last Name" name="lastName" required />
      
      <label htmlFor="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required />
      
      <label htmlFor="username"><b>User Name</b></label>
      <input type="text" placeholder="Enter Username" name="username" required />
      
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      
      
      <div className="clearfix">
      {/* {needs onclick on button} */}
      <button type="button"  className="cancelbtn" onClick={props.closeModal}>Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
      </div>
      </div>
      </form>
      </div>
    )
  }
};
export default Signup;
