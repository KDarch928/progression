import React, { Component } from "react";
import "../../style.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import image from '../../images/goals_note.png';

const stylejumbo = {
  backgroundImage: 'url('+image+')'
}

const hdr = {
  textAlign: "center"
}

const quote = {
    paddingBottom: 40,
    fontSize: 36
}

class About extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

 /* handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };
*/
  render() {
    return (
      <MuiThemeProvider>
       <h1 style={hdr}>Set Priorities by reaching your Goals!</h1>
       <div style={stylejumbo} className="jumbotronabout">
         <blockquote style={quote}>”What you get by achieving your goals is not as important as what you become by achieving your goals.”
– Henry David Thoreau</blockquote>
 
      <br />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default About;
