import React from "react";
import FlatButton from 'material-ui/FlatButton';
import image from '../../images/sun.jpg';
import "../../style.css";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const Goalsearchform = props => (
  <div>
    <form role="form">
      <div className="form-group">
        <label for="searchCategory">Search goals by Category:</label>
        <input type="text" className="form-control" id="searchCategory" />
      </div>
      <button type="submit" className="btn btn-info" id="run-search"> Search</button>
    </form>
  </div>
);

export default Goalsearchform;
