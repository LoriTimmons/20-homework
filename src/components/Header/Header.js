import React from "react";
import Nav from "../Nav/Nav";

function Header(props) {
  console.log(props);
  return (
    <header className="header">
      <h1>
        <a href="/">Lori Timmons</a>
      </h1>
      <Nav setNewPage={props.setNewPage}/>
      <h2></h2>
    </header>
  );
}

export default Header;
