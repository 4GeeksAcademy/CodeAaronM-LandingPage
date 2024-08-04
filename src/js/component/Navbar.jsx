import React from "react";
//create your first component
const Navbar = () => {
	return (
    <>
		<nav className="navbar-expand-lg navbar bg-dark border-bottom border-body" id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar w/ text</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Pricing</a>
        </li>
        </ul>
  </div>
</nav>
</>
	);
};

export default Navbar;
