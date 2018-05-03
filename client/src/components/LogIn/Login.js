import React, {component} from "react";
import "./Login.css";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            message: ""
        };
    };
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        
        const { username, password } = this.state;
        
        // axios.post('/login', { username, password })
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
            if(res && res.isLoginSuccessful){
                console.log("successful login form login page.")
                this.props.onSuccessfullLogin(res.user);
                this.setState({
                    isLoginSuccessful: true
                })
                Nav.forceUpdate();
            } else {
                this.setState({
                    isCredentialsWrong: true
                });
            }
            
        })
        .catch(err => console.log(err));
    
    
}



render() {
    
    const { username, password, message } = this.state;
    return (
        <div id="id01" className="static-modal">
        <form className="modal-content animate" onSubmit={this.onSubmit}>
        <div className="imgcontainer">
        {/* //span needs onlcik button */}
        <span className="close" title="Close Modal" onClick={props.closeModal}>&times;</span>
        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        <h1> Progression Log In</h1>
        <h2>Sign in to your Progression account to access all your Goal.</h2>
        </div>
        <div className="container">
        <label ><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit">Login</button>
        </div>
        {/* /div needs style that background */}
        <div className="container">
        {/* //onclick needs button */}
        <button type="button" className="cancelbtn" onClick={props.closeModal}>Cancel</button>
        </div>
        </form>
        </div>
    )
}
}

export default Login;