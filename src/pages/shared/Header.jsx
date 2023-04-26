import React from "react";
import logo from "/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  
  return (
    <Container className="mt-4 text-center">
      <img src={logo} alt="" />
      <p className="my-2">Journalism Without Fear or Favor</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text.
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
