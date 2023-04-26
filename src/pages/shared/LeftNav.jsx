import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import editorImage1 from "../../assets/editorsInsight1.png";
import editorImage2 from "../../assets/editorsInsight2.png";
import editorImage3 from "../../assets/editorsInsight3.png";
import { Card, Col, Row } from "react-bootstrap";
import { FaRegCalendar } from "react-icons/fa";


const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories)

  const editors = [
    {
      id: 1,
      img: `${editorImage1}`,
      title: "21 The Most Stylish Wedding Guest Dresses For Spring",
      date: "Jan 4, 2022",
    },
    {
      id: 2,
      img: `${editorImage2}`,
      title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
      date: "Jan 4, 2022",
    },
    {
      id: 3,
      img: `${editorImage3}`,
      title: "21 The Most Stylish Wedding Guest Dresses For Spring",
      date: "Jan 4, 2022",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-start">All Category</h2>
      <ListGroup>
        {categories?.map((category) => (
          <ListGroup.Item className="ps-5 border-0">
            <NavLink
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-dark p-2"
                  : "text-black text-decoration-none"
              }
            >
              {category.name}
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Row xs={1} className="g-3 mt-3">
        {editors.map((e) => (
          <Col key={e.id}>
            <Card className="h-100 border-0">
              <Card.Img className="px-3" variant="top" src={e.img} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>Sports<FaRegCalendar className="mx-2"></FaRegCalendar>{e.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LeftNav;
