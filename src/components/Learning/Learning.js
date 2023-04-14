import React from "react";
import Card from "../Other/Card";

export default function Learning() {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 content">
      <Card
        cardTitle='Learn JS'
        cardDescription='will add soon'
        linkTo='/learning/learn-js'
        buttonClasses=""
        wrapperClasses=""
      />
      <Card
        cardTitle='Learn SCSS'
        cardDescription='will add soon'
        linkTo='/learning/learn-scss'
        buttonClasses=""
        wrapperClasses=""
      />
      <Card
        cardTitle='Learn React JS'
        cardDescription='will add soon'
        linkTo='/learning/learn-react-js'
        buttonClasses=""
        wrapperClasses=""
      />
    </div>
  );
}
