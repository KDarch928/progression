import React from "react";
import "./Login.css";

const Login = () => (

    <div id="id01" className="modal">

        <form className="modal-content animate" action="/action_page.php">
            <div className="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
                <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                <h1> Progression Log In</h1>
                <h2>Sign in to your Progression account to access all your Goal.</h2>
            </div>

            <div className="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
                <label>

                </label>
            </div>

            <div className="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>

);

export default Login;