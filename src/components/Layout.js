import React from "react";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="outer">
        <div className="top">
          <div className="circle bigCircle" />
          <div className="circle smCircle smCircle1" />
          <div className="circle smCircle smCircle2" />
          <div className="circle smCircle smCircle3" />
        </div>
        <div className="bottom">
          <h1>Pokedex</h1>
          <div className="screen">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
