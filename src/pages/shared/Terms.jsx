import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3>Terms and Conditions</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, expedita neque! Repellat cum rem unde sed et assumenda reiciendis! Deserunt itaque officia quod veritatis maiores voluptas qui voluptatibus eligendi quaerat.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;