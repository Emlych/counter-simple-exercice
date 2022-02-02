import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faCalculator} />
      <div className="header--name">React Counter</div>
    </div>
  );
};

export default Header;
