import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // here below we also have to declare a second type of classname, with classname={   `${} ${}` }
    // in order for the component to understand that if we call that card component and give it a cssclassName prop, it has to integrate it in addition to the classes.card css layout
    <div className={`${classes.card} ${props.cssclassName}`}>
      {props.children}
    </div>
  );
};

export default Card;
