import React from "react";
//import FlatButton from 'material-ui/FlatButton';
import image from '../../images/sun.jpg';
import "../../style.css";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const Goalsearchform = props => (
  <div>
    <form role="form" className="menu">
      <div className="form-group">
        <label for="searchCategory">Search goals by Category:</label><br />
        <button value="health" className="btn btn-info" id="health">Health</button><br/>
        <button value="fitness" className="btn btn-info" id="fitness">Fitness </button><br/>
        <button value="home" className="btn btn-info" id="home">Home </button><br />
        <button value="hobbies" className="btn btn-info" id="hobbies">Hobbies </button><br/>
        <button value="social" className="btn btn-info" id="social">Social </button><br />
        <button value="efficiency" className="btn btn-info" id="efficiency">Efficiency </button> 
      </div>
    </form>
  </div>
);

export default Goalsearchform;
