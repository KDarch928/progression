import React from "react";
import FlatButton from 'material-ui/FlatButton';
import image from '../../images/sun.jpg';
import "../../style.css";

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const Goalform = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <br/>
          <div className="panel-body">
            <form role="form">
              <div className="form-group">
                <label for="goalCategory">Goal Category:</label>
                <input
                 type="text" 
                 className="form-control" 
                 id="goalCategory"
                 onChange={props.handleInputChange}
                 required
                  />
              </div>
              <div className="form-group">
                <label for="Goal">Goal Description:</label>
                <input 
                type="text" 
                className="form-control" 
                id="Goal"
                onChange={props.handleInputChange}
                required
                />
              </div>
              <button
              onClick={props.handleFormSubmit}
              type="submit" 
              className="btn btn-info" 
              id="run-search"> Create Goal</button>
            </form>
          </div>
        </div>
      </div>
   </div>
 </div>
);

export default Goalform;
