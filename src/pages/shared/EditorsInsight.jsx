import React from "react";
import editorImage1 from "../../assets/editorsInsight1.png";
import editorImage2 from "../../assets/editorsInsight2.png";
import editorImage3 from "../../assets/editorsInsight3.png";
import { Card, Col, Row } from "react-bootstrap";
import { FaRegCalendar } from "react-icons/fa";

const EditorsInsight = () => {
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
  return (
    <>
      <h3 className="mt-4 mb-3">Editors Insight</h3>
      <Row xs={1} md={3} className="g-3">
        {editors.map((e) => (
          <Col key={e.id}>
            <Card className="h-100">
              <Card.Img variant="top" src={e.img} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text><FaRegCalendar className="me-2"></FaRegCalendar>{e.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EditorsInsight;
