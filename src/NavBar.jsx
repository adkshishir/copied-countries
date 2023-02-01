import React from "react";

const NavBar = () => {
  const style = {
    // position: "fixed",
    // height: "10px",
    // width: "40px",
    // display: "inline-block",
    // flexDirection: "column",
  };

  return (
    <nav
      // style={{
      //   position: "fixed",
      //   width: "10vw",
      //   height: "fit-content",
      //   backgroundColor: " white",
      // }}
      className=" flex justify-between mb-4 px-5 py-3 shadow-lg font-medium text-lg"
    >
      <nav>
        Where in the World?
        {/* <a href="#item1">item1</a>
        <a href="#item78">item78</a> <a href="#item100">item100</a>
        <a href="#item201">item201</a> <a href="#item32">item332</a> */}
      </nav>
      <nav className="">icon Dark Mode</nav>
    </nav>
  );
};

export default NavBar;
