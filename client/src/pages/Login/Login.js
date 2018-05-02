import React, {Component} from "react";
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

        axios.post('/api/auth/login', { username, password })
            .then((result) => {
                
                this.setState({ message: '' });
                this.props.history.push('/')
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.setState({ message: 'Login failed. Username or password not match' });
                }
            });
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
                        <input type="text" placeholder="Enter Username" name="uname" required />
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
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