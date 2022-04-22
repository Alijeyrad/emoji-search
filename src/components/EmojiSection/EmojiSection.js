import React, { useEffect, useState, useContext, useReducer } from "react";
import "./EmojiSection.css";
import EmojiCard from "../EmojiCard/EmojiCard";
import EmojiContext from "../../contexts/EmojiContext";

const EmojiSection = () => {
  
  const context = useContext(EmojiContext)
  const loading = context.loading;
  const emojis = context.emojis;

  return (
    <div className="content">
      {/* {loading && <div>Loading...</div>} */}
      {emojis.length === 0 && 
        <div>Sorry, no emojis found</div>
      }
      {emojis.map((emoji) => (
        <EmojiCard symbol={emoji.symbol} title={emoji.title} />
      ))}
    </div>
  );
};

export default EmojiSection;
