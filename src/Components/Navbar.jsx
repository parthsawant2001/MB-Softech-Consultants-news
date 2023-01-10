/* eslint-disable array-callback-return */
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navItems = [
    "Home",
    "Latest news",
    "Live TV",
    "World",
    "Entertainment",
    "Cricket",
    "For you",
    "Shopping",
  ];
  const listItems = navItems.map((item) => <li>{item}</li>);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let time = newDate.getHours() + ":" + newDate.getMinutes();

  return (
    <div className="nav">
      <h2>MB Softech Consultants news</h2>
      <p className="dateTime">{`Date: ${date}-${month}-${year} | Time:${time}`}</p>
      <div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
