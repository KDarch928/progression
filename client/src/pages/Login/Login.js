import React, {Component} from "react";
import "./Login.css";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from "../../utils/API"
import image from '../../images/wallpaper.jpg';
import Userhome from "../Userhome/Userhome"
const background = {
    backgroundImage: 'url('+image+')'

  }
class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            message: "",
            loginSuccessful: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    };
    onChange = (e) => {
  
    const { name, value } = e.target;

    // Set the state for the appropriate input field
    this.setState({
    [name]: value
    });
    // }
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

      

        API.submitLogin({
            //put value from fields here. 
            username: this.state.username,
            password: this.state.password,
          })
          .then(res => {
            console.log("response from server at login.");
            // TODO add code to redirect 
            console.log(res)
            this.setState({
                loginSuccesful:true
            })
          })
          .catch(err => console.log(err));
        }
    



    render() {

        const homePage=(<Userhome/>)
        const loginForm =(
            <div style={background}>
            <div id="id01" className="static-modal">
                <form className="modal-content animate" onSubmit={this.onSubmit}>
                    <div className="imgcontainer">
                        {/* //span needs onlcik button onClick={props.closeModal} */}
                        <span className="close" title="Close Modal" >&times;</span>
                        <img src="" alt="Avatar" className="avatar" />
                        <h1> Progression Login</h1>
                        <h2>Log in to your Progression account to access all your Goal.</h2>
                    </div>
                    <div className="container">
                        <label ><b>Username</b></label>
                        <input type="text" value ={this.state.username} placeholder="Enter Username" name="username" onChange ={this.onChange} required />
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" value ={this.state.password} name="password" onChange={this.onChange} required />
                        <button type="submit">Login</button>
                    </div>
                 
                </form>
            </div>
            </div>
        )
    return this.state.loginSuccessful ? homePage : loginForm
    }
}

export default Login;