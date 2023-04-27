import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  // console.log(createUser)

  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      loggedUser.displayName = name;
      loggedUser.photoURL = image;
      console.log(loggedUser)
    })
    .catch(error => console.log(error))
  }

  return (
    <Container>
        <h2 className="text-center mt-5 mb-4">Register</h2>
      <Form onSubmit={handleRegister} className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
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
