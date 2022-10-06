import React from "react";

const Header = (props) => {
  console.log("Hello Rendered Header");

  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.heading}</h1>
        <h3 className="header__subtitle">{props.caption}</h3>
        <h3 className="header__subtitle organization__name ">
          {props.organization}
        </h3>
      </div>
    </div>
  );
};

//   We cannot directly export a const value
export default Header;
