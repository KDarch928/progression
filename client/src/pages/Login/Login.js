import React, {Component} from "react";
import "./Login.css";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from "../../utils/API"

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            message: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    };
    onChange = (e) => {
    //     const state = this.state
    //     state[e.target.name] = e.target.value;
    //     this.setState(state);
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

        // axios.post('/api/auth/login', { username, password })
        //     .then((result) => {
                
        //         this.setState({ message: '' });
        //         this.props.history.push('/')
        //     })
        //     .catch((error) => {
        //         if (error.response.status === 401) {
        //             this.setState({ message: 'Login failed. Username or password not match' });
        //         }
        //     });

        API.submitLogin({
            //put value from fields here. 
            username: this.state.username,
            password: this.state.password,
          })
          .then(res => {
            console.log("response from server at login.");
            // TODO add code to redirect 
            console.log(res)
  
            // other stuff to make login true. 
            
            
          })
          .catch(err => console.log(err));
        }
    



    render() {

        const { username, password, message } = this.state;
        return (
            <div id="id01" className="stati-modal">
                <form className="modal-content animate" onSubmit={this.onSubmit}>
                    <div className="imgcontainer">
                        {/* //span needs onlcik button onClick={props.closeModal} */}
                        <span className="close" title="Close Modal" >&times;</span>
                        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                        <h1> Progression Sign up</h1>
                        <h2>Sign up to your Progression account to access all your Goal.</h2>
                    </div>
                    <div className="container">
                        <label ><b>Username</b></label>
                        <input type="text" value ={this.state.username} placeholder="Enter Username" name="username" onChange ={this.onChange} required />
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" value ={this.state.password} name="password" onChange={this.onChange} required />
                        <button type="submit">Login</button>
                    </div>
                    {/* /div needs style that background */}
                    <div className="container">
                        {/* //onclick needs button onClick={props.closeModal}*/}
                        <button type="button" className="cancelbtn" >Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;