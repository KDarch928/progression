import React, { Component} from "react";


// import Login from "../../components/LogIn";
// import Signup from "../../components/Signup";

class Home extends Component {

constructor(props, context){
    super(props,context);
    
    this.state={
openLogin: false,
openSignup: false

}
this.openModal = this.openModal.bind(this);
this.closeModal = this.closeModal.bind(this)
}
openModal(){
    this.setState({openLogin: true, openSignup: true})
}


closeModal(){
    this.setState({openLogin: false, openSignup: false})
}

render(){
    return(
        <div className ="container">
        
        <div><ul>
            <li><button onClick={() =>this.setState({showLogin:true})}>Login</button></li>
            <li><button onClick={() =>this.setState({showSignup:true})}>Signup</button></li>
            </ul></div>
        {/* <Login visible={this.state.showLogin} onHide={this.state.closeModal} />
        <Signup show={this.state.showSignup} /> */}
        </div>

    )
}


}

export default Home;