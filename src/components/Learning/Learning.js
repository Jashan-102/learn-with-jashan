import React from "react";
import { Link } from "react-router-dom";

export default function Learning() {
  return (
    <div className="container mx-auto mx-auto">
      <Link to="/learning/learn-js" className="me-4 pe-4">
        Learn JS
        
      </Link>
      <Link to="/learning/learn-scss" className="me-4">
        Learn SCSS
      </Link>
      <Link to="/learning/learn-react-js" className="me-4">
        Learn React JS
      </Link>
    </div>
  );
}
