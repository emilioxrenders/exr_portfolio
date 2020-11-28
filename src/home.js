import React, { Component } from "react";
import { Box } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
<Box className="homecontainer">
      <Box className="homecontent">
        <h1 className="homeh2">Webdesigner & Front-end Developer</h1>
        <p className="homep">I design and code minimalistic looking websites</p>
      </Box>

</Box>
    );
  }
}

export default Home;
