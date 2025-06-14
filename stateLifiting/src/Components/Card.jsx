import React from "react";

const Card = (props) => {
  return (
    <div>
      <input
        type="text"
        className="outline-2 outline-white"
        onChange={(e) => props.setName(e.target.value)}
      />
      <p>Name in card : {props.name}</p>
    </div>
  );
};

export default Card;
