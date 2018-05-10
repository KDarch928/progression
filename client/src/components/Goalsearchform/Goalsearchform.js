import React from "react";
import FlatButton from 'material-ui/FlatButton';
import image from '../../images/sun.jpg';
import "../../style.css";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const Goalsearchform = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <br/>
          <div className="panel-body">
            <form role="form">
              <div className="form-group">
                <label for="searchCategory">Search by Category:</label>
                <input type="text" className="form-control" id="searchCategory" />
              </div>
              <div className="form-group">
                <label for="keyword">Search by keyword:</label>
                <input type="text" className="form-control" id="keyword"/>
              </div>
              <button type="submit" className="btn btn-info" id="run-search"> Search</button>
            </form>
          </div>
        </div>
      </div>
   </div>
 </div>
);

export default Goalsearchform;
