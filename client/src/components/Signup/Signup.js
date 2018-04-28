import React from "react";
import "./Signup.css";


const Signup = () => (

  <div id="id01" className="modal">
    <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
    <form className="modal-content" action="/action_page.php">
      <div className="container">
        <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
          <h1> Progression Log In</h1>
          <h2>Sign in to your Progression account to access all your Goal.</h2>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="email"><b>First Name</b></label>
          <input type="text" placeholder="Enter FirstName" name="firstName" required />

          <label for="email"><b>Last Name</b></label>
          <input type="text" placeholder="Enter Last Name" name="lastName" required />

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
          <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

          <div className="clearfix">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
    </div>
  </form>
</div>


    );
    export default Signup;