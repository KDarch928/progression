import React from "react";

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
                <input type="text" className="form-control" id="goalCategory" />
              </div>
           <div className="form-group">
              <label for="Goal">Goal Description:</label>
              <input type="text" className="form-control" id="Goal"/>
           </div>
            <button type="submit" className="btn btn-primary" id="run-search"> Create Goal</button>
           </form>
          </div>
        </div>
      </div>
   </div>
 </div>
);

export default Goalform;
