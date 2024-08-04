import React from "react";
//create your first component
const Navbar = () => {
	return (
		<nav className="navbar-expand-lg navbar bg-dark border-bottom border-body">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar w/ text</a>
      <span className="navbar-text text-light">
        Navbar text with an inline element
      </span>
  </div>
</nav>
	);
};

export default Navbar;
