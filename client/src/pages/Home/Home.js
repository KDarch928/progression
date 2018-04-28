import React, { Component} from "react";
import Login from "../../components/LogIn";
import Signup from "../../components/Signup";

class Home extends Component {

render(){
    return(
        <div className ="container">
        <Login />
        <Signup />
        </div>

    )
}


}

export default Home;