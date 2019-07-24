import React from "react";
import "./style.css";

const Header = props => (
  <div className="titlebox">
    <h1> Clicky Game!</h1>
    <p> Click an image to begin!</p>
    <h3 className="scores">
      {" "}
      Score: {props.score} | Highscore: {props.highscore}
    </h3>
  </div>
);

export default Header;
