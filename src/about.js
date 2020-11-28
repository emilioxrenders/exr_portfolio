import React, { Component } from "react";
import { Box } from '@material-ui/core';
import me from './pictures/me.jpg';

class About extends Component {
  render() {
    return (
      <Box className="aboutcontent">
        <h1>Hi, I'm Emilio. Nice to meet you.</h1>

        <Box>
        <p className="aboutdescription">I’m a 21 year old web designer & front-end developer located in Tilburg.
        I enjoy creating clean and minimalistic looking websites and I'm always ready to learn new things.
        Apart from front-end development, I'm also capable of translating problems into solutions and have experience with Scrum.
        </p>
        </Box>

        <Box>
        <img className="aboutfoto" src={me} alt="Logo" />
        </Box>



      </Box>
    );
  }
}

export default About;
