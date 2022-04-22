import React, { useState } from "react";
import "./EmojiCard.css";
import { MdOutlineFileCopy, MdDone } from "react-icons/md";

const EmojiCard = (props) => {
  const symbol = props.symbol;
  const title = props.title;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(symbol);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="card" title={title}>
      {copied ? (
        <div className="copied">
          <small>copied</small>
          <MdDone />
        </div>
      ) : (
        <div className="svg">
          <MdOutlineFileCopy onClick={copyToClipboard} />
        </div>
      )}

      <div className="symbol">{symbol}</div>
      <span className="title">{title}</span>
    </div>
  );
};

export default EmojiCard;
