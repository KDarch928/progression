import React from "react";
import FlatButton from 'material-ui/FlatButton';
import image from '../../images/sun.jpg';
import "../../style.css";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const Goalform = props => (
    <form role="form">

        <label for="goalCategory">Goal Category:</label>
        <input
         type="text" 
         className="form-control" 
         id="goalCategory"
         onChange={props.handleInputChange}
         required
          />

        <label for="Goal">Goal Description:</label>
        <input 
        type="text" 
        className="form-control" 
        id="Goal"
        onChange={props.handleInputChange}
        required
        />
      <button
      onClick={props.handleFormSubmit}
      type="submit" 
      className="btn btn-info" 
      id="createGoal"> Create Goal</button>
    </form>

);

export default Goalform;
