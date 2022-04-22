import React from "react";
import "./Header.css";
import { GoMarkGithub } from "react-icons/go";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="findEmojis">Find Emojis 👀</div>
        <div className="info">
          <a target="_blank" href="https://github.com/Alijeyrad/emoji-search">
            <GoMarkGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
