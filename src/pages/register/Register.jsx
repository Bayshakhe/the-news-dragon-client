import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
        <h2 className="text-center mt-5 mb-4">Register</h2>
      <Form className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="image" placeholder="Image URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Terms and Conditions" />
        </Form.Group>

        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
        <br />

        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>

        <br />

        <Form.Text className="text-danger">
         
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
