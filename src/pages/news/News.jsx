import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from "../shared/EditorsInsight";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    category_id,
    details,
    image_url,
    rating,
    title,
    total_view,
    author,
  } = news;
  return (
    <>
      <Card>
        <Card.Img className="p-3" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft className="me-2"></FaArrowLeft>All news in this
              category
            </Button>
          </Link>
        </Card.Body>
      </Card>

    <EditorsInsight></EditorsInsight>
    </>
  );
};

export default News;
