import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import bg from "../../assets/bg.png";
import { AuthContext } from "../../authProvider/AuthProvider";

const RightNav = () => {
  const {googleLogin,githubLogin} = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser)
    })
    .catch(error => console.log(error.message))
  }
  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error => console.log(error.message))
  }

  return (
    <>
      <div className="my-3">
        <Button onClick={handleGoogleLogin} className="w-100 mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button onClick={handleGithubLogin} className="w-100" variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
        <div>
          <h2 className="my-3">Find on us</h2>
          <ListGroup className="">
            <ListGroup.Item>
              <FaFacebook className="text-primary" /> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter className="text-primary" /> Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram className="text-danger" /> Instragram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="bg-light my-3 p-3 text-center">
          <h2 className="text-start">Q-Zone</h2>
          <img className="img-fluid" src={qZone1} alt="" />
          <img className="my-3 img-fluid" src={qZone2} alt="" />
          <img className="img-fluid" src={qZone3} alt="" />
        </div>
        <div style={{backgroundImage: `url(${bg})`, height: '400px'}} className="position-relative">
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h4 className="fw-bold">Create an Amazing Newspaper</h4>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button className="mb-2" variant="danger">Learn More
        </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightNav;
