import React from "react";
import logo from "/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mt-4 text-center">
      <img src={logo} alt="" />
      <p className="my-2">Journalism Without Fear or Favor</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="dark">Danger</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
  );
};

export default Header;
