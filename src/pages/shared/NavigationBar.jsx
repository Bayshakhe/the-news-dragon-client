import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../authProvider/AuthProvider";

const NavigationBar = () => {
  // const { user } = useContext(AuthContext);
  const user = null

    return (
        <Container>
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
                <FaUserCircle style={{ fontSize: "30px" }}></FaUserCircle>
            ) : (
              ""
            )}
            {user ? (
                <Link to={`/logout`}>
                  <Button variant="dark">Logout</Button>
                </Link>
            ) : (<>
                <Link to={`/login`}>
                  <Button variant="dark" className="me-2">Login</Button>
                </Link>
                <Link to={`/register`}>
                  <Button variant="dark">Register</Button>
                </Link>
                </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;