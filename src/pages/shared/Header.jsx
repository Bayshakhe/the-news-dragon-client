import React, { useContext } from "react";
import logo from "/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../authProvider/AuthProvider";

const Header = () => {
  // const { user } = useContext(AuthContext);
  const user = null
  
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
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              to={`/`}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-dark p-2"
                  : "text-black text-decoration-none p-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={`/about`}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-dark p-2"
                  : "text-black text-decoration-none p-2"
              }
            >
              About
            </NavLink>
            <NavLink
              to={`/career`}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-dark p-2"
                  : "text-black text-decoration-none p-2"
              }
            >
              Career
            </NavLink>
          </Nav>
          <Nav className="d-flex align-items-center">
            {user ? (
              <Nav.Link href="#deets">
                <FaUserCircle style={{ fontSize: "30px" }}></FaUserCircle>
              </Nav.Link>
            ) : (
              ""
            )}
            {user ? (
              <Nav.Link eventKey={2} href="#memes">
                <Link to={`/logout`}>
                  <Button variant="dark">Logout</Button>
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={2} href="#memes">
                <Link to={`/login`}>
                  <Button variant="dark" className="me-2">Login</Button>
                </Link>
                <Link to={`/register`}>
                  <Button variant="dark">Register</Button>
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
