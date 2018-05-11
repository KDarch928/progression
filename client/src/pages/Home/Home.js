import React, { Component} from "react";
import{Jumbotron,Button,Grid,Row,Col,Image,Thumbnail} from "react-bootstrap"
import "./Home.css"
// import Login from "../../components/LogIn";
// import Signup from "../../components/Signup";
import ReactRotatingText from "react-rotating-text"

class Home extends Component {


    
render(){
    return(
        <Grid className="image">
        <Jumbotron className="jumbotron">
        <div className="jumbocontainer">
        <h5>Progression</h5>
        <h6> Join us </h6>
        <ReactRotatingText className='landingRotating' items={['to learn new goals', 'to share goals', 'to check your goals', 'to simplify planning']} />
        <p>
         
          <Button bsStyle="primary" className="button">Lets get Started!</Button>
        </p>
        </div>
      </Jumbotron >
        <Row className="show-grid">
        <Col xs={6} md={4} >
        
        <Image src="../../images/write.jpg" className="intro" thumbnail/>
        
        <h1> Share Goal, Make Connections </h1>
        <p>Share your goals with others. you will receive encouragmeent and advice along the way. Encourage others as they work on their goals! </p>
        
        </Col>
        
        <Col xs={6} md={4} >
        <Image src="../../images/mind.jpg"className="intro" thumbnail/>
        <h1> Goal Idea </h1>
        <p>Have an idea for a goal? Maybe its following new excercise plan, going on a diet or learning new language. Your goal is not out of reaech!</p>
       
        </Col>

        <Col xs={6} md={4}>
        <Image src="../../images/friends.jpg" className="intro" thumbnail />
        <h1> Plan Goal</h1>
        <p>Define your goals and make ap lan. We will help you along the way!</p>
        </Col>
        
        
        
        </Row>

        <Row className="show-grid">
        <Col>
        <br/>
        <br/>
        <h1> We are here to make you set up your goals easily and more accessible</h1>
        </Col>
        </Row>
        </Grid>
    )
}


}

export default Home;