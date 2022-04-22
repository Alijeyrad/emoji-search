import React from "react";
import './Header.css';
import { GoMarkGithub } from "react-icons/go";

const Header = () => {
  return (
    <div className="header">
      <div className="info">developed by Ali</div>
        <GoMarkGithub />
    </div>
  );
};

export default Header;
