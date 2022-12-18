import React from "react";
import { Link } from "react-router-dom";

export default function Learning() {
  return (
    <div className="container">
      <Link to="/learning/learn-js" className="me-4 pe-4">
        Learn JS
      </Link>
      <Link to="/learning/learn-scss" className="me-4">
        Learn SCSS
      </Link>
    </div>
  );
}
