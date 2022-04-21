import React, { useEffect, useState } from "react";
import "./EmojiSection.css";
import EmojiCard from "../EmojiCard/EmojiCard";

const EmojiSection = () => {
  const [emojiList, setEmojiList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmojis = async () => {
    setLoading(true);
    const emojiResponse = await fetch(
      "https://run.mocky.io/v3/f6ca54f3-ec46-4694-b0de-8ca310f23e57"
    );
    const response = await emojiResponse.json();
    setEmojiList(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchEmojis();
  }, []);

  return (
    <div className="content">
      {loading && <div>Loading...</div>}
      {emojiList.map((emoji) => (
        <EmojiCard symbol={emoji.symbol} title={emoji.title} />
      ))}
    </div>
  );
};

export default EmojiSection;
