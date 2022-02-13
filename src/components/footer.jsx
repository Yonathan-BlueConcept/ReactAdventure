import React from "react";
import ReactDOM from "react-dom";

const Footer = ({ length }) => {
  return length == 0 ? (
    <footer>No Items left</footer>
  ) : (
    <footer>
      you have {length} {length == 1 ? "item" : "items"} left
    </footer>
  );
};

export default Footer;
