import React from "react";
import "./EmojiCard.css";

const EmojiCard = (props) => {
  const symbol = props.symbol;
  const title = props.title;

  return (
    <div className="card" title={title}>
      <div className="symbol">{symbol}</div>
      <span className="title">{title}</span>
    </div>
  );
};

export default EmojiCard;
