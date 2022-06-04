import React from "react";
import "../App.css";
import logo from "./mongodb-logo.png";

// Function to display header for page
function Header(props) {
  return (
	<header className="header">
	<img className="logo" src={logo} alt="Logo" />
	  <h1>Task 7 MongoDB</h1>
	</header>
  );
}

// Export component for use in other files
export default Header;