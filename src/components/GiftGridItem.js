import React from "react";

const GiftGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__jackInTheBox">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default GiftGridItem;
