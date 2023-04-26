import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
        <h2 className="text-center mt-5 mb-4">Please Login</h2>
      <Form className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
        <br />

        <small>Don't have an account? <Link to="/register">Please Register</Link></small>
        
        <br />

        <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
