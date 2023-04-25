import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories)

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
              to={`category/${category.id}`}
              className={({ isActive }) =>
                isActive ? "text-white bg-dark p-2" : "text-black text-decoration-none"
              }
            >
              {category.name}
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default LeftNav;
