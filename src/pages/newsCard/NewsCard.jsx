import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  // console.log(news);
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
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image
          style={{ height: "40px", width: "40px" }}
          src={author?.img}
          roundedCircle
        />
        <div className="ps-2 flex-grow-1">
          <p className="fw-semibold mb-0">{author?.name}</p>
          <p className="mb-0">
            {moment(author?.published_date).format("YYYY-MM-DD")}
          </p>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`} className="text-warning fw-semibold">
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center py-2">
        <div className="flex-grow-1 mb-0 d-flex align-items-center">
          <span className="text-warning me-2">
            <Rating
              className="text-warning"
              style={{ maxWidth: 100 }}
              value={rating?.number}
              readOnly
            />
          </span>
          {rating?.number}
        </div>
        <div className="mb-0">
          <span className="me-2">
            <FaEye></FaEye>
          </span>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
